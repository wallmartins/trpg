import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  newPassword: string;
}
