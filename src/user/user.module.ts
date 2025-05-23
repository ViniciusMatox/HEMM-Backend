import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Utils } from './userUtils';
import { HashService } from 'src/utils/hash/hash.service';

@Module({
  controllers: [UserController],
  providers: [UserService, Utils, HashService],
})
export class UserModule {}
