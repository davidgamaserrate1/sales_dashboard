

import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Button,Textarea, useToast 
  } from '@chakra-ui/react'
import HeaderTopBar from "../HeaderTopBar";

import style from './groupedProduct-styles.module.css'
import { useNavigate } from "react-router-dom";

const GroupedProductForm = ()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [simpleProducts, setSimpleProducts ] =useState()
    const [value, setValue] = useState('')    
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    const toast = useToast()
    const navigate = useNavigate()
         
    let listSimpleProducs=[]

    useEffect(()=>{
      fetch('http://localhost:4000/api/simple_product')
      .then((res)=> res.json())
      .then((response)=>{
        listSimpleProducs= response.map((product)=> ({
           id: product.id,
           name: product.name
        } )) 
        console.log(listSimpleProducs )
        //setSimpleProducts(response)
      })
    },[])
    
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
            <h3>Cadastro- Item Agrupado</h3>
            <FormControl isInvalid={isError} style={{ margin:'auto auto', width:'100%' }}>
                <FormLabel>Nome</FormLabel>
                <Input type='text' placeholder="Nome do produto" value={name} onChange={(e) => setName(e.target.value) } />
                
                <FormLabel>Descrição</FormLabel>
                <Textarea type='text' placeholder="Descrição do produto"  value={description} onChange={(e) => setDescription(e.target.value) } />
                
                <FormLabel>Valor</FormLabel>
                <Input  type='number'  placeholder="Valor do produto"  value={value} onChange={(e) => setValue(e.target.value) } />
                
                <FormLabel>Itens</FormLabel>
                <div> 

                </div>
                
                

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

export default GroupedProductForm