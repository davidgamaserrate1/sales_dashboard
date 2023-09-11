import React, { useState } from "react";
import ModalAuth from "../../components/modalAuth";
import { Button, FormControl,  Heading, Input, useToast } from "@chakra-ui/react";
import style from './login-styles.module.css'
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const [username, setUsername] =useState('')
  const [password, setPassword]=useState('')
  const navigate = useNavigate()
  const toast = useToast()

  const handleLogin = async()=>{
    const credentialsRegister ={
        username,
        password
    }

    await fetch('http://localhost:4000/auth/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentialsRegister)
    })
    .then((res)=>res.json())
    .then((res)=> {
        localStorage.setItem('token',res.token)
        localStorage.setItem('isAdmin',res.isAdmin === true)
        
       if(res.token){
        toast({
            title: 'Login realizado com sucesso!',                 
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
       navigate('/home')
       }else{
        toast({
            title: 'Usuário ou senha inválido',                 
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
       }
        

    })
}
    let error = username === '' || password ===''
    return(
        <ModalAuth>
           <div className={style.login_container}>
            <Heading   as='h3' size='lg' color={'#555555'}>Login </Heading>
                <Input type='text' mt={8} 
                    placeholder="Usuário."
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
            <FormControl >
                <Input type='password'mt={8} 
                    placeholder="Digite sua senha."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                {error ? (<Button
                    mt={8}
                    colorScheme='teal'
                    width={'100%'}
                    type='submit'
                     
                    isDisabled={true}
                >
                Login
                </Button> ) :(
                <Button
                    mt={8}
                    colorScheme='teal'
                    width={'100%'}
                    type='submit'
                    onClick={handleLogin}
                >
                Login
                </Button> )}
                               
                               
            </FormControl>
            <div className={style.login_redirect}>
                Não possi conta? 
                <span onClick={()=> navigate('/registration')}>Cadastre-se</span>
            </div>
            </div>
        </ModalAuth>
    )
}

export default Login