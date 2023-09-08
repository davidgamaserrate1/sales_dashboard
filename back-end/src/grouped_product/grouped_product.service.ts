import { PrismaService } from "src/prisma_service";
// import { GroupedProduct } from "./grouped_product.model"; 
import { Injectable } from "@nestjs/common";

@Injectable()
export class GroupedProductService {
    
    constructor(private prisma: PrismaService) {}

    // async getAllGroupedProducts(): Promise<GroupedProduct[]> {
    //     return this.prisma.groupedProduct.findMany();
    // }

    // async getGroupedProduct(id: number): Promise<GroupedProduct[] | null> {
    //     return this.prisma.groupedProduct.findMany({where: { simpleProductId: Number(id) }});
    // }

    // // async createGroup(data: any): Promise<any> {
    // //     const createdGroup = await this.prisma.groupedProduct.create({
    // //       data: {
    // //         name: data.name,
    // //         description: data.description,
    // //         value: data.value,
    // //         group_itens: {
    // //           create: data.group_itens,
    // //         },
    // //       },
    // //     });
    
    // //     return createdGroup;
    // //   }
      
      
      

    // async deleteGroupedProduct(id: number): Promise<GroupedProduct> {
    //     return this.prisma.groupedProduct.delete({
    //         where: { id: Number(id) }
    //     });
    // }

    // async updateGroupedProduct(id: number, data: GroupedProduct): Promise<GroupedProduct> {        
    //     return this.prisma.groupedProduct.update({
    //         where: { id: Number(id) },
    //         data: {
    //             name: data.name,
    //             description: data.description,
    //             value: data.value,
    //             simpleProductId: data.simpleProductId
    //         } 
    //     });
    // }

    
}
