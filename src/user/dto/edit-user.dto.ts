import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EditUserDto {
  @IsEmail()
  email?: string;

  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  newPassword?: string;
}
