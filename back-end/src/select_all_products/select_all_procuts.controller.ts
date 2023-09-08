import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { SelectAllProductsService } from "./select_all_procuts.service";


@Controller('api/list_products')
export class ListAllProductsController{
    
    constructor(private readonly listAllProducts:SelectAllProductsService){}

    @Get()
    async getAllProducts(){
        return this.listAllProducts.getAllProducts()
    }
}