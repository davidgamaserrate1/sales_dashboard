import { Prisma } from "@prisma/client";


export class SimpleProduct implements Prisma.SimpleProductCreateInput{
    id:number;
    name: string;
    description?: string;
    value: number;
}