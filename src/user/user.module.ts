import { Module } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { UserController } from '@user/user.controller';
import { UserRepository } from '@user/user.repository';
import { UserValidator } from '@user/user.validator';

@Module({
    providers: [UserService, UserRepository, UserValidator],
    controllers: [UserController],
})
export class UserModule {}
