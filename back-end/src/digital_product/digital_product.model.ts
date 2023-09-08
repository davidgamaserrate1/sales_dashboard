import { Prisma } from "@prisma/client";


export class DigitalProduct implements Prisma.SimpleProductCreateInput{
    id:number;
    description?: string;
    value: number;
    linkDownload: string;
    name: string;
}