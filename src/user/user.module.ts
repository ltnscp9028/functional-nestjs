import { Module } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { UserController } from '@user/user.controller';
import { UserRepository } from '@user/user.repository';

@Module({
    providers: [UserService, UserRepository],
    controllers: [UserController],
})
export class UserModule {}
