import { IsAlphanumeric, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsAlphanumeric()
  id: string;

  @IsStrongPassword()
  password: string;
}
