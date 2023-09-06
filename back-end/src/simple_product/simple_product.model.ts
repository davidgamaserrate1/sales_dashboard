import { Prisma } from "@prisma/client";



export class SimpleProduct implements Prisma.SimpleProductCreateInput{
    id:number;
    description?: string;
    value: number;
}