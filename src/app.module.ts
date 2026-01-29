import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { APP_NAME } from './common/constant/config.constant';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, APP_NAME],
  exports: [APP_NAME],
})
export class AppModule {}
