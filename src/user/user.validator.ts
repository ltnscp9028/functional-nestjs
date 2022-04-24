import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateUserBody } from '@user/dto/create_user.dto';

@Injectable()
export class UserValidator {
    createUserValidator({ email, name }: CreateUserBody) {
        return Prisma.validator<Prisma.UserCreateInput>()({
            email,
            name,
        });
    }
}
