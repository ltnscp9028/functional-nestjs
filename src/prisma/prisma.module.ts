import { Global, Module } from '@nestjs/common';
import { PrismaService } from '@prismaModule/prisma.service';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
