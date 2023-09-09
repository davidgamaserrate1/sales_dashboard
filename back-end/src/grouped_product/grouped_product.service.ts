import { PrismaService } from "src/prisma_service";
import { GroupedProduct } from "./grouped_product.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class GroupedProductService {
    
    constructor(private prisma: PrismaService) {}

    async getAllGroupedProduct(): Promise<GroupedProduct[]> {
      return this.prisma.groupedProduct.findMany({  include: { simpleItems: true }});
    }    
    async getGroupedProduct(id:Number):Promise<GroupedProduct | null>{
        return this.prisma.groupedProduct.findUnique({
            where: { id: Number(id) },
            include: { simpleItems: true }, 
          });
             
    }

    async createGroupedProduct(data: GroupedProduct): Promise<GroupedProduct> {
        return this.prisma.groupedProduct.create({ data });
    }
    
    async updateGroupedProduct(id: Number, data:GroupedProduct):Promise<GroupedProduct>{
        return this.prisma.groupedProduct.update({
            where:{id: Number(id)},
            data:{
                name:data.name,
                description:data.description,
                value:data.value,
            
            }
        })
    }

    async deleteGroupedProduct(id:Number):Promise<GroupedProduct>{
        return this.prisma.groupedProduct.delete({
            where:{id: Number(id)}
        })
    }
}
