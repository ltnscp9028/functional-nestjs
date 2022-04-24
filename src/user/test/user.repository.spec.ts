import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '@prismaModule/prisma.service';
import { UserRepository } from '@user/user.repository';
import { seedUsers } from '@user/test/seed/user.seed';

const db = {
    user: {
        findMany: jest.fn().mockResolvedValue(seedUsers()),
    },
};

describe('UserController', () => {
    let userRepository: UserRepository;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserRepository,
                {
                    provide: PrismaService,
                    useValue: db,
                },
            ],
        }).compile();

        userRepository = module.get<UserRepository>(UserRepository);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(userRepository).toBeDefined();
        expect(prisma).toBeDefined();
    });

    it('shoud get user', async () => {
        expect(await userRepository.getUsers()).toEqual(seedUsers());
    });
});
