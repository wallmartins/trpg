import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignIn, SignUp } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jsw: JwtService,
    private config: ConfigService
  ) { }

  async signUp(dto: SignUp) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          email: dto.email,
          hash
        }
      })

      return this.signToken(user.userId, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }

  }

  async signIn(dto: SignIn) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Credentials incorrect');

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    return this.signToken(user.userId, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jsw.signAsync(payload, {
      expiresIn: '24h',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
