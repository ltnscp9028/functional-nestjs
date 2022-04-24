import { User } from '@prisma/client';

export const seedUsers = (): Partial<User>[] => [
    { email: 'hello@gmail.com', name: 'hello' },
    { email: 'world@gmail.com', name: 'world' },
];

export const seedCreateUser = (): Pick<User, 'email' | 'name'> => ({
    email: 'prisma@gmail.com',
    name: 'prisma',
});
