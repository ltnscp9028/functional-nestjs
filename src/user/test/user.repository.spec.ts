import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '@prismaModule/prisma.service';
import { UserRepository } from '@user/user.repository';
import {
    seedCreateUser,
    seedDeleteUser,
    seedUpdateUser,
    seedUsers,
} from '@user/test/seed/user.seed';
import { User } from '@prisma/client';

const db = {
    user: {
        findMany: jest.fn().mockResolvedValue(seedUsers()),
        create: jest.fn().mockResolvedValue(seedCreateUser()),
        update: jest.fn().mockResolvedValue(seedUpdateUser()),
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

    it('should create user', async () => {
        expect(
            await userRepository.createUser({ data: seedCreateUser() }),
        ).toEqual({
            id: 3,
            email: 'prisma@gmail.com',
            name: 'prisma',
        });
    });

    it('should update user', async () => {
        expect(
            await userRepository.updateUser({
                where: {
                    id: 1,
                },
                data: {
                    name: 'y0on2q',
                },
            }),
        ).toEqual({
            id: 1,
            email: 'hello@gmail.com',
            name: 'y0on2q',
        });
    });

    describe('should delete user', () => {
        beforeAll(async () => {
            jest.spyOn(prisma['user'], 'update').mockResolvedValue(
                seedDeleteUser() as unknown as User,
            );
        });

        it('should delete user', async () => {
            expect(
                await userRepository.deleteUser({
                    where: {
                        id: 1,
                    },
                    data: {
                        active: 0,
                    },
                }),
            ).toEqual({
                id: 1,
                email: 'hello@gmail.com',
                name: 'hello',
                active: 0,
            });
        });
    });
});
