import { Module } from "@nestjs/common";
import { GroupedProductController } from "./grouped_product.controller";
import { GroupedProductService } from "./grouped_product.service";
import { PrismaService } from "src/prisma_service";


@Module({
    controllers:[GroupedProductController],
    providers:[GroupedProductService, PrismaService]
})

export class GroupedProductModule{}