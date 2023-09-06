import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DigitalProduct } from "./digital_product.model";
import { DigitalProductService } from "./digital_product.service";

@Controller('api/digital_product')
export class DigitalProductController{

    constructor(private readonly DigitalProductService:DigitalProductService){}

    @Get()
    async getAllDigitalProduct():Promise<DigitalProduct[]>{
        return this.DigitalProductService.getAllDigitalService()
    }

    @Post()
    async postDigitalProduct(@Body() postData:DigitalProduct):Promise<DigitalProduct>{
        return this.DigitalProductService.createDigitalProduct(postData);
    }

    @Get(':id')
    async getDigitalProduct(@Param('id') id:Number):Promise<DigitalProduct | null>{
        return this.DigitalProductService.getDigitalSerivce(id)
    }

    @Delete(':id')
    async deleteDigitalProduct(@Param('id') id:Number):Promise<DigitalProduct>{
        return this.DigitalProductService.deleteDigitalProduct(id)
    }

    @Put(':id')
    async editDigitalProduct(@Param('id') id:Number, @Body() postData:DigitalProduct):Promise<DigitalProduct>{
        return this.DigitalProductService.updateDigitalProduct(id,postData)
    }
}