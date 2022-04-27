import { PrismaClient } from '@prisma/client';
import { users } from './user.seed';

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.createMany(users);
};

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
