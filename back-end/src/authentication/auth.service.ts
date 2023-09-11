import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma_service";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dto/login-user.dto";
import * as bcrypt from 'bcrypt'
import { RegisterUsersDto } from "./dto/register-user.dto";
import { UserModel } from "src/users/users.model";


@Injectable()
export class AuthService{
    
    constructor(
        private readonly prismaService: PrismaService, 
        private jwtService: JwtService, 
        private readonly usersService: UsersService 
    ){}

    async isAdmin(username: string): Promise<boolean> {
        const user = await this.prismaService.userModel.findUnique({
            where: { username },
        });

        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }

        return user.isAdmin === true;
    }    

    async login(loginDto: LoginDto):Promise<any>{
        const {username, password}=loginDto

        const users = await this.prismaService.userModel.findUnique({
            where:{username}
        })

        if(!users){
            throw new NotFoundException('Usuário não encontrado')
        }

        const validatePassowrd = await bcrypt.compare(password, users.password)
        
        if(!validatePassowrd){
            throw new NotFoundException('Senha incorreta')
        }

        const isAdmin = users.isAdmin === true;


        return{
            token: this.jwtService.sign({username}),
            isAdmin:isAdmin
        }
    }

    async register(createDto: RegisterUsersDto):Promise<any>{
        const createUser = new UserModel()
        createUser.username =createDto.username
        createUser.password= await bcrypt.hash(createDto.password, 10)
        createUser.isAdmin = createDto.isAdmin

        const user = await this.usersService.createUser(createUser)

        return{
            token: this.jwtService.sign({username: user.username})
        }
    }

}