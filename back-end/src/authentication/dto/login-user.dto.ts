import { IsString } from "class-validator";



export class LoginDto{
    @IsString()
    username: string;
    
    password: string;
}