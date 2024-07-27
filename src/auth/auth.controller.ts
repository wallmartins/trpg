import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignIn, SignUp } from './dto';

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

}
