import { Prisma } from "@prisma/client";

export class UserModel implements Prisma.UserModelCreateInput {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
 
}

