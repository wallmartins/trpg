import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';

@UseGuards(JwtGuard)
@Controller('')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getUser(@GetUser() user: User): User {
    return user;
  }

  @Patch()
  editUser(@GetUser('userId') userId: string, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

}
