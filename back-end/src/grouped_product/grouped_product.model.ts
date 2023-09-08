import { Prisma } from "@prisma/client";

export class GroupedProduct implements Prisma.GroupedProductCreateInput {
  id: number;
  description?: string;
  value: number;
  name: string;
  simpleProductId: number;
  groupId: number; 
  
}
