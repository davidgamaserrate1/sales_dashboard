import React, { useState } from "react";
import style from './login-styles.module.css'
import ModalAuth from "../../components/modalAuth";
import { Button, FormControl, FormErrorMessage, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] =useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    

    const navigate = useNavigate()

    const isError = password !== confirmPassword 
    
    const handleRegister = async()=>{
        const credentialsRegister ={
            email,
            password
        }
        await fetch('', {
            body: JSON.stringify(credentialsRegister)
        })
        .then((res)=>res.json())
        .then((response)=> console.log(response))
    }


    return( 
        <ModalAuth>
        <div className={style.login_container}>
            <Heading   as='h3' size='lg' color={'#555555'}>Cadastro </Heading>
                <Input type='email' mt={8} 
                    placeholder="Endereço de e-mail."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            <FormControl isInvalid={isError}  >
                <Input type='password'mt={8} 
                    placeholder="Digite uma senha."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Input type='password' mt={8}
                    placeholder="Confirmar senha."
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    
                    />
                    <FormErrorMessage>
                   As senhas nao correspondem
                </FormErrorMessage>
                <Button
                    mt={8}
                    colorScheme='teal'
                    width={'100%'}
                    type='submit'
                    onClick={handleRegister}
                >
                Cadastrar
                </Button>
                
            </FormControl>

            <div className={style.login_redirect}>
                Já possi conta? 
                <span onClick={()=> navigate('/login')}>Login</span>
            </div>
        </div>
        </ModalAuth>
    )
}

export default Login