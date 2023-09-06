import { PrismaService } from "src/prisma_service";
import { DigitalProduct } from "./digital_product.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DigitalProductService{
    
    constructor(private prisma:PrismaService){}

    async getAllDigitalService():Promise<DigitalProduct[]>{
        return this.prisma.DigitalProduct.findMany()
    }

    async getDigitalSerivce(id:Number):Promise<DigitalProduct | null>{
        return this.prisma.DigitalProduct.findUnique({where: {id:Number(id)}})
    }

    async createDigitalProduct(data:DigitalProduct):Promise<DigitalProduct>{
        return this.prisma.DigitalProduct.create({
            data,
        })
    }

    async updateDigitalProduct(id:Number, data:DigitalProduct):Promise<DigitalProduct>{
        return this.prisma.DigitalProduct.update({
            where:{id: Number(id)},
            data:{
                description: data.description,
                value: data.value,
                linkDownload: data.linkDownload,
            }
        })
    }

    async deleteDigitalProduct(id:Number):Promise<DigitalProduct>{
        return this.prisma.DigitalProduct.delete({
            where:{id: Number(id)}
        })
    }
}