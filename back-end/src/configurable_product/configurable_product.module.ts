import {Module} from "@nestjs/common"
import { ConfigurableProductController } from "./configurable_product.controller"
import { ConfigurableProductService } from "./configurable_product.service"
import { PrismaService } from "src/prisma_service"

@Module({
    controllers:[ConfigurableProductController],
    providers:[ConfigurableProductService, PrismaService]
})

export class ConfigurableProductModule{}