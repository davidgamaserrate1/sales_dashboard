

import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Button,Textarea, useToast, Heading 
  } from '@chakra-ui/react'
import HeaderTopBar from "../HeaderTopBar";

import style from './ConfigurableProduct-styles.module.css'
import { useNavigate } from "react-router-dom";

const ConfigurableProduct = ()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
     
    const [value, setValue] = useState('')    
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    const toast = useToast()
    const navigate = useNavigate()
    
    async function saveProduct  () {        
        const configurable_prodcut =   {
            "name": name,
            "description": description,
            "value":  parseFloat(value),
            "size" : size,
            "color" : color,
        }
        console.log(configurable_prodcut)
    
        try {
         await fetch('http://localhost:4000/api/configurable_product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(configurable_prodcut)
          })
          .then((res) => {
            toast({
                title: 'Produto criado com sucesso!',                 
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            navigate('/')
        });
        } catch (error) {
          console.log(error);
        }
      }

    const isError = name === '' || description === '' || value === '' || size === '' || color === '' 
    
  return (
    <>
        <HeaderTopBar/>
        <div className={style.configurableProduct_form}>
            <Heading   as='h2' size='md'>Cadastro - Item Configurável</Heading>
            <FormControl isInvalid={isError} style={{ margin:'auto auto', width:'100%' }}>
                <FormLabel>Nome</FormLabel>
                <Input type='text' placeholder="Nome do produto" value={name} onChange={(e) => setName(e.target.value) } />
                
                <FormLabel>Descrição</FormLabel>
                <Textarea type='text' placeholder="Descrição do produto"  value={description} onChange={(e) => setDescription(e.target.value) } />
                
                <FormLabel>Valor</FormLabel>
                <Input  type='number'  placeholder="Valor do produto"  value={value} onChange={(e) => setValue(e.target.value) } />
                
                <FormLabel>Tamanho</FormLabel>
                <Input  type='text'  placeholder="Tamanho do produto"  value={size} onChange={(e) => setSize(e.target.value) } />
                
                <FormLabel>Cor</FormLabel>
                <Input  type='text'  placeholder="Cor do produto"  value={color} onChange={(e) => setColor(e.target.value) } />

                { !isError && (
                    <Button
                    mt={8}
                    colorScheme='teal'                
                    type='submit'
                    onClick={saveProduct}
                    >
                    Cadastrar
                    </Button>
                )}
                     
                { isError && (
                    <>
                        <Button
                            mt={8}
                            colorScheme='teal'                
                            type='submit'
                            isDisabled={true}
                        >   
                        Cadastrar
                        </Button>
                        <FormErrorMessage>
                            Por favor, preencha todos os campos.
                        </FormErrorMessage>
                    </>
                    )}
            </FormControl>
            
        </div>
    </>
  )
}

export default ConfigurableProduct