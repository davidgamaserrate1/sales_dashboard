import { Module } from "@nestjs/common";
import { SimpleProductController } from "./simple_product.controller";
import { SimpleProductService } from "./simple_product.service";
import { PrismaService } from "src/prisma_service";


@Module({
    controllers: [SimpleProductController],
    providers: [SimpleProductService, PrismaService]
})

export class SimpleProducteModule{}