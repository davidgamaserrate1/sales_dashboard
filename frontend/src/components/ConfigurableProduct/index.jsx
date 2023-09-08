

import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Button,Textarea 
  } from '@chakra-ui/react'
import HeaderTopBar from "../HeaderTopBar";

import style from './ConfigurableProduct-styles.module.css'

const ConfigurableProduct = ()=>{
    const [nome, setNome] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')    
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
 
    const isError = nome === '' || description === '' || value === '' || size === '' || color === '' 
    
  return (
    <>
        <HeaderTopBar/>
        <div className={style.configurableProduct_form}>
            <h3>Cadastro- Item Configurável</h3>
            <FormControl isInvalid={isError} style={{ margin:'auto auto', width:'100%' }}>
                <FormLabel>Nome</FormLabel>
                <Input type='text' placeholder="Nome do produto" value={nome} onChange={(e) => setNome(e.target.value) } />
                
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