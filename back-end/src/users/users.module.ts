import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma_service';
import { UsersController } from './users.controller';

@Module({
  controllers:[UsersController],
  providers:[UsersService,PrismaService]
})
export class UsersModule {}

