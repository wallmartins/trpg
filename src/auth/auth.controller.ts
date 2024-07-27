import { Body, Controller, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignIn, SignUp } from './dto';
import { GetUser } from './decorator';
import { ChangePasswordDto } from './dto';
import { JwtGuard } from './guard';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signUp')
  signUp(@Body() dto: SignUp) {
    return this.authService.signUp(dto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  signIn(@Body() dto: SignIn) {
    return this.authService.signIn(dto)
  }

  @UseGuards(JwtGuard)
  @Patch('change-password')
  changePassword(@GetUser('userId') userId: string, @Body() dto: ChangePasswordDto) {
    return this.authService.changePassword(userId, dto);
  }

}
