import {Module} from "@nestjs/common"
import { ListAllProductsController } from "./select_all_procuts.controller"
import { SelectAllProductsService } from "./select_all_procuts.service"
import { PrismaService } from "src/prisma_service"

@Module({
    controllers:[ListAllProductsController],
    providers:[SelectAllProductsService, PrismaService]
})

export class SelectAllProductsModule{}