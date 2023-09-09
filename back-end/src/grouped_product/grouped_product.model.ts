import { Prisma } from "@prisma/client";

export class GroupedProduct implements Prisma.GroupedProductCreateInput {
  id: number;
  name: string;
  description: string;
  value: number;
 
}
