import React, { useState } from "react";
import style from './login-styles.module.css'
import ModalAuth from "../../components/modalAuth";
import { Button, Checkbox, FormControl, FormErrorMessage, Heading, Input, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [username, setUsername] =useState('')
    const [password, setPassword]=useState('')
    const [isAdmin, setIsAdmin]=useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')

    const toast = useToast()
    const navigate = useNavigate()

    const isError = password !== confirmPassword 
    
    const handleRegister = async()=>{
        const credentialsRegister ={
            username,
            password,
            isAdmin
        }

        await fetch('http://localhost:4000/auth/register', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentialsRegister)
        })
        .then((res)=>res.json())
        .then(()=> {
            toast({
                title: 'Cadastro realizado com sucesso!',                 
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            navigate('/login')

        })
    }

    return( 
        <ModalAuth>
        <div className={style.login_container}>
            <Heading   as='h3' size='lg' color={'#555555'}>Cadastro </Heading>
                <Input type='text' mt={8} 
                    placeholder="Usuário."
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
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
                
                <Checkbox style={{border:'1px solid #f0f0f0',width:'100%', padding:'4px'}} mt={4} colorScheme='green'
                value={isAdmin}
                onChange={(e)=>setIsAdmin(e.target.checked)}
                >Cadastro de administrador</Checkbox>
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