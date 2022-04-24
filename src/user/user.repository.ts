import { Injectable } from '@nestjs/common';

import { PrismaService } from '@prismaModule/prisma.service';
import type { UserValidator } from '@user/user.validator';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(data: ReturnType<UserValidator['createUserValidator']>) {
        return this.prisma.user.create({
            data,
        });
    }
}
