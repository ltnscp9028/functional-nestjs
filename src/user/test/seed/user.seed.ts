import { User } from '@prisma/client';

export const seedUsers = (): Partial<User>[] => [
    { id: 1, name: 'hello' },
    { id: 2, name: 'world' },
];
