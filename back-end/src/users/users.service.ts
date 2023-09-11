import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma_service';
import { UserModel } from './users.model';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {} 

        async findOne(username: string): Promise<UserModel | undefined> {
            try{
                return this.prisma.userModel.findUnique({ where: { username } });

            }catch(error){
                throw new Error(`Erro ao criar usuário: ${error.message}`);
            }
        }

        async getAllUser():Promise<UserModel[]>{
            return this.prisma.userModel.findMany()
        }


        async createUser(data:UserModel):Promise<UserModel>{
            const existing = await this.prisma.userModel.findUnique({
                where:{
                    username:data.username
                }
            })

            if(existing){
                throw new Error('Usuário já cadastrado!');
            }
            return this.prisma.userModel.create({data})
        }
 

}
