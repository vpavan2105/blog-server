import { Injectable } from '@nestjs/common';
import { Auth } from './schemas/auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @Injectable(Auth.name)
    private 
  )
}
