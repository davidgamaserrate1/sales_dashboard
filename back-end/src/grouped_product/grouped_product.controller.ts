import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GroupedProduct } from "./grouped_product.model";
import { GroupedProductService } from "./grouped_product.service";

@Controller('api/grouped_product')
export class GroupedProductController{
    
    constructor(protected readonly groupedProduct:GroupedProductService){}

    @Get()
    async getAllGroupedProduct():Promise<GroupedProduct[]>{
      return this.groupedProduct.getAllGroupedProduct()
    }
    
    @Get(':id')
    async getGroupedProduct(@Param('id') id:number):Promise<GroupedProduct>{
      return this.groupedProduct.getGroupedProduct(id)
    }
    
    @Post()
    async postGroupedProducts(@Body() postData: GroupedProduct): Promise<GroupedProduct> {
      return this.groupedProduct.createGroupedProduct(postData);
    }

    @Delete(':id')
    async deleteGroupedProduct(@Param('id') id:number):Promise<GroupedProduct>{
      return this.groupedProduct.deleteGroupedProduct(id)
    }

    @Put(':id')
    async editGroupedProduct(@Param('id') id:number, putData:GroupedProduct):Promise<GroupedProduct>{
      return this.groupedProduct.updateGroupedProduct(id, putData)
    }
 
}