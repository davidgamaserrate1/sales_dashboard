import { Body, Controller, Post, Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-user.dto";
import {Request, Response} from 'express'
import { RegisterUsersDto } from "./dto/register-user.dto";

@Controller('/auth')
export class AuthController{
    
    constructor(private readonly authService:AuthService){}

    @Post('/login')
    async login(@Req() request:Request, @Res() response: Response, @Body() loginDto: LoginDto):Promise<any>{
        try{
            const result = await this.authService.login(loginDto);
            return response.status(200).json({
                token: result.token,
                isAdmin: result.isAdmin

            })
        }catch(err){
            return response.status(500).json({
                status:'Error!',
                message:`Erro:  ${err}` ,
               
            })
        }
    }

    @Post('/register')
     async register(@Req() request:Request, @Res() response :Response, @Body() registerDto: RegisterUsersDto):Promise<any>{
      try {
            const result = await this.authService.register(registerDto);
            return response.status(200).json({
              token: result.token,
            
            });
          } catch (err) {
            console.log(err)
            return response.status(500).json({
              status: 'Error!',
              message: `Erro:  ${err}` ,
            });
          }
        }

  
}