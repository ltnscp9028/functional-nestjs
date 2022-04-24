import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import type { CreateUserBody } from '@user/dto/create_user.dto';
import type { GetUserParam } from '@user/dto/get_user.dto';
import { DeleteUserParam } from './dto/delete_user.dto';
import { UpdateUserBody, UpdateUserParam } from './dto/update_user.dto';

@Injectable()
export class UserValidator {
    createUserValidator({ email, name }: CreateUserBody) {
        return Prisma.validator<Prisma.UserCreateArgs>()({
            data: {
                email,
                name,
            },
        });
    }

    getUserValidator({ userId }: GetUserParam) {
        return Prisma.validator<Prisma.UserFindUniqueArgs>()({
            rejectOnNotFound: true,
            where: {
                id: Number(userId),
            },
        });
    }

    updateUserValidator({ userId }: UpdateUserParam, { name }: UpdateUserBody) {
        return Prisma.validator<Prisma.UserUpdateArgs>()({
            where: {
                id: Number(userId),
            },
            data: {
                name,
            },
        });
    }

    deleteUserValidator({ userId }: DeleteUserParam) {
        return Prisma.validator<Prisma.UserUpdateArgs>()({
            where: {
                id: Number(userId),
            },
            data: {
                active: 0,
            },
        });
    }
}
