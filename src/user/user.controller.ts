import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('')
export class UserController {
  constructor() { }

  @Get()
  getUser(@GetUser() user: User): User {
    return user;
  }

}
