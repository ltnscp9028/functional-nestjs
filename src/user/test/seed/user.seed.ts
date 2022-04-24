import { User } from '@prisma/client';

export const seedUsers = (): Partial<User>[] => [
    { id: 1, email: 'hello@gmail.com', name: 'hello' },
    { id: 2, email: 'world@gmail.com', name: 'world' },
];

export const seedCreateUser = (): Pick<User, 'id' | 'email' | 'name'> => ({
    id: 3,
    email: 'prisma@gmail.com',
    name: 'prisma',
});

export const seedUpdateUser = (): Pick<User, 'id' | 'email' | 'name'> => ({
    id: 1,
    email: 'hello@gmail.com',
    name: 'y0on2q',
});
