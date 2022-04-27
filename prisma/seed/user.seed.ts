import { Prisma } from '@prisma/client';

export const users = Prisma.validator<Prisma.UserCreateManyArgs>()({
    data: [
        {
            name: 'y0on2q',
            email: 'ltnscp9028@gmail.com',
            active: 1,
            role: 'ADMIN',
        },
        {
            name: 'currying',
            email: 'curried@crurrying.com',
            active: 0,
            role: 'USER',
        },
        {
            name: 'monad',
            email: 'monad@monad,com',
            active: 1,
            role: 'USER',
        },
    ],
});
