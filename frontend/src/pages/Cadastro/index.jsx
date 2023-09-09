import React from "react";
import style from './login-styles.module.css'
import ModalAuth from "../../components/modalAuth";
import { Button, FormControl, Heading, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    return( 
        <ModalAuth>
        <div className={style.login_container}>
            <Heading   as='h3' size='lg' color={'#555555'}>Cadastro </Heading>
            <FormControl mt={8} >
                <Input type='email' mt={8} 
                    placeholder="Endereço de e-mail."
                />
                <Input type='password'mt={8} 
                    placeholder="Digite uma senha."
                />
                <Input type='password' mt={8}
                    placeholder="Confirmar senha."/>
                <Button
                    mt={8}
                    colorScheme='teal'
                    width={'100%'}
                    type='submit'
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