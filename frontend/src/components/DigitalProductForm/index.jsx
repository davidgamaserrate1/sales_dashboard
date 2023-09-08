

import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Button,Textarea 
  } from '@chakra-ui/react'
import HeaderTopBar from "../HeaderTopBar";

import style from './DigitalProduct-styles.module.css'

const DigitalProduct = ()=>{
    const [nome, setNome] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [download_link, setDownload_link] = useState('')
 
    const isError = nome === '' || description === '' || value=== '' || download_link=== '' 
    
  return (
    <>
        <HeaderTopBar/>
        <div className={style.digitalProduct_form}>
            <h3>Cadastro- Item Digital</h3>
            <FormControl isInvalid={isError} style={{ margin:'auto auto', width:'100%' }}>
                <FormLabel>Nome</FormLabel>
                <Input type='text' placeholder="Nome do produto" value={nome} onChange={(e) => setNome(e.target.value) } />
                
                <FormLabel>Descrição</FormLabel>
                <Textarea type='text' placeholder="Descrição do produto"  value={description} onChange={(e) => setDescription(e.target.value) } />
                
                <FormLabel>Valor</FormLabel>
                <Input  type='number'  placeholder="Valor do produto"  value={value} onChange={(e) => setValue(e.target.value) } />
                
                <FormLabel>Link para download</FormLabel>
                <Input  type='text'  placeholder="Link para download do produto"  value={download_link} onChange={(e) => setDownload_link(e.target.value) } />

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

export default DigitalProduct