import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SimpleProduct } from "./simple_product.model";
import { SimpleProductService } from "./simple_product.service";


@Controller('api/v1/simple_product')
export  class SimpleProductController{
    
    constructor(private readonly simpleProductService:SimpleProductService){}
    
    @Get()
    async getAllSimpleProduct():Promise <SimpleProduct[]>{
        return this.simpleProductService.getAllSimpleProductService()
    }

    @Post()
    async postSimpleProduct(@Body() postData:SimpleProduct):Promise<SimpleProduct>{
        return this.simpleProductService.createSimpleProduct(postData)
    }

    @Get(':id')
    async getSimpleProduct(@Param('id') id:number):Promise<SimpleProduct | null>{
        return this.simpleProductService.getSimpleProductService(id)
    }

    @Delete(':id')
    async deleteSimpleProduct(@Param('id') id:number):Promise<SimpleProduct>{
        return this.simpleProductService.deleteSimpleProduct(id)
    }

    @Put(':id')
    async editSimpleProduct(@Param('id') id:number, @Body() postData:SimpleProduct):Promise<SimpleProduct>{
        return this.simpleProductService.updateSimpleProduct(id, postData)
    }


}