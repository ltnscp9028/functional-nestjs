import { Injectable } from '@nestjs/common';

import { PrismaService } from '@prismaModule/prisma.service';
import type { UserValidator } from '@user/user.validator';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }

    getUser(userFindUniqueArgs: ReturnType<UserValidator['getUserValidator']>) {
        return this.prisma.user.findUnique(userFindUniqueArgs);
    }

    createUser(
        userCreateInput: ReturnType<UserValidator['createUserValidator']>,
    ) {
        return this.prisma.user.create(userCreateInput);
    }

    updateUser(
        userUpdateInput: ReturnType<UserValidator['updateUserValidator']>,
    ) {
        return this.prisma.user.update(userUpdateInput);
    }

    deleteUser(
        userUpdateInput: ReturnType<UserValidator['deleteUserValidator']>,
    ) {
        return this.prisma.user.update(userUpdateInput);
    }
}
