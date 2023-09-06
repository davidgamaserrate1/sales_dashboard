import { Module } from "@nestjs/common"
import { DigitalProductController } from "./digital_product.controller"
import { DigitalProductService } from "./digital_product.service"
import { PrismaService } from "src/prisma_service"

@Module({
    controllers:[DigitalProductController],
    providers:[DigitalProductService, PrismaService]
})

export class DigitalProductModule{}