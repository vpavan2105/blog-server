import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auto.dto';

/**
 * @Controller : all the routes inside this controller start with /auth
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.authService.create(createAuthDto);
  }
}
