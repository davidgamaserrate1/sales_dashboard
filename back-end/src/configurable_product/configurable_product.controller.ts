import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ConfigurableProduct } from "./configurable_product.model";
import { ConfigurableProductService } from "./configurable_product.service";


@Controller('api/configurable_product')
export class ConfigurableProductController{

    constructor(private readonly configurableProduct:ConfigurableProductService){}

    @Get()
    async getAllConfigurableProduct():Promise<ConfigurableProduct[]>{
        return this.configurableProduct.getAllConfigurableProduct()
    }

    @Post()
    async postConfigurableProduct(@Body() postData:ConfigurableProduct):Promise<ConfigurableProduct>{
        return this.configurableProduct.createConfigurableProduct(postData)
    }

    @Get(':id')
    async getConfigurableProduct(@Param('id') id:number):Promise<ConfigurableProduct | null>{
        return this.configurableProduct.getConfigurableProduct(id)
    }

    @Delete(':id')
    async deleteConfigurableProduct(@Param('id') id:number):Promise<ConfigurableProduct>{
        return this.configurableProduct.deleteConfigurableProduct(id)
    }

    @Put(':id')
    async editConfigurableProduct(@Param('id') id:number, putData:ConfigurableProduct):Promise<ConfigurableProduct>{
        return this.configurableProduct.updateConfigurableProduct(id,putData)
    }
}