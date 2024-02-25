import { Module } from '@nestjs/common';
import { userController } from './userModule/user.controller';
import { userModule } from './userModule/user.module';
@Module({
  imports: [userModule]
})
export class AppModule {}
