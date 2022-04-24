import { Injectable } from '@nestjs/common';

import { UserRepository } from '@user/user.repository';
import { UserValidator } from '@user/user.validator';
import { CreateUserBody } from '@user/dto/create_user.dto';
import { GetUserParam } from './dto/get_user.dto';
@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
        private userValidator: UserValidator,
    ) {}

    getUsers() {
        return this.userRepository.getUsers();
    }

    getUser(param: GetUserParam) {
        return this.userRepository.getUser(
            this.userValidator.getUserValidator(param),
        );
    }

    createUser(body: CreateUserBody) {
        return this.userRepository.createUser(
            this.userValidator.createUserValidator(body),
        );
    }
}
