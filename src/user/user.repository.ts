import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prismaModule/prisma.service';

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }
}
