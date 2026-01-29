import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('APP_NAME') private readonly name: string) {}

  private users: CreateUserDto[] = [];
  getAllUsers(): CreateUserDto[] {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  whoAmI(): string {
    return this.name;
  }
}
