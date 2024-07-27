import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';
import { AuthService } from 'src/auth/auth.service';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private authService: AuthService) { }

  async editUser(userId: string, dto: EditUserDto) {
    const hash = await argon.hash(dto.password);

    const userVerify = await this.prisma.user.findFirst({
      where: {
        userId
      }
    })

    const pwMatches = await argon.verify(hash, userVerify.hash);

    if (!pwMatches) throw new ForbiddenException('Credentials Not Match')

    const user = await this.prisma.user.update({
      where: {
        userId
      },
      data: {
        email: dto.email ? dto.email : userVerify.email,
        hash: dto.newPassword ? dto.newPassword : dto.password
      }
    });

    delete user.hash;

    return user;
  }
}
