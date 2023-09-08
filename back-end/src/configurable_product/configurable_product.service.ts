import { PrismaService } from "src/prisma_service";
import { ConfigurableProduct } from "./configurable_product.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigurableProductService{
    
    constructor(private prisma:PrismaService){}

    async getAllConfigurableProduct():Promise<ConfigurableProduct[]>{
        return this.prisma.configurableProduct.findMany()
    }

    async getConfigurableProduct(id:number):Promise<ConfigurableProduct | null>{
        return this.prisma.configurableProduct.findUnique({where:{id:Number(id)}})
    }

    async createConfigurableProduct(data:ConfigurableProduct):Promise<ConfigurableProduct>{
        return this.prisma.configurableProduct.create({data})
    }

    async updateConfigurableProduct(id:number, data:ConfigurableProduct):Promise<ConfigurableProduct>{
        return this.prisma.configurableProduct.update({
            where: {id: Number(id)},
            data:{
                description: data.description,
                value: data.value,
                size: data.size,
                color: data.color
            }

        })
    }

    async deleteConfigurableProduct(id:number):Promise<ConfigurableProduct>{
        return this.prisma.configurableProduct.delete({where:{id: Number(id)}})
    }
}