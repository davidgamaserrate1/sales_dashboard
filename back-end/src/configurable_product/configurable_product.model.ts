import { Prisma } from "@prisma/client";

export class ConfigurableProduct implements Prisma.ConfigurableProductCreateInput{
    id:number;
    name?:string;
    description?:string;
    value:number
    size:string;
    color:string
}