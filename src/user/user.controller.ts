import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getUser(@GetUser() user: User): User {
    return user;
  }

}
