import { Injectable } from '@nestjs/common';
import { Auth, AuthDocument } from './schemas/auth.schema';
import { Model } from 'mongoose';
import { CreateAuthDto } from './dto/create-auto.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private readonly authmodel: Model<AuthDocument>,
  ) {}
  async create(createAuthDto:CreateAuthDto): Promise<AuthDocument | Error> {
    return await this.authmodel.create(createAuthDto);
  }
}
