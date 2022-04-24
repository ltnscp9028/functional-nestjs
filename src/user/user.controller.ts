import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from '@user/user.service';
import { CreateUserBody } from '@user/dto/create_user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() body: CreateUserBody) {
        return this.userService.createUser(body);
    }
}
