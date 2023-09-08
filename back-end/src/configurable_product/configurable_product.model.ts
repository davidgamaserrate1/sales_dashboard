import { Prisma } from "@prisma/client";

export class ConfigurableProduct implements Prisma.ConfigurableProductCreateInput{
    id:number;
    description?:string;
    value:number
    size:string;
    color:string
}