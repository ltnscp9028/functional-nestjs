import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { UserService } from '@user/user.service';
import { CreateUserBody } from '@user/dto/create_user.dto';
import { GetUserParam } from '@user/dto/get_user.dto';
import { UpdateUserBody, UpdateUserParam } from '@user/dto/update_user.dto';
import { DeleteUserParam } from '@user/dto/delete_user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(@Param() param: GetUserParam) {
        return this.userService.getUser(param);
    }

    @Post()
    createUser(@Body() body: CreateUserBody) {
        return this.userService.createUser(body);
    }

    @Patch(':userId')
    updateUser(@Param() param: UpdateUserParam, @Body() body: UpdateUserBody) {
        return this.userService.updateUser(param, body);
    }

    @Delete(':userId')
    deleteUser(@Param() param: DeleteUserParam) {
        return this.userService.deleteUser(param);
    }
}
