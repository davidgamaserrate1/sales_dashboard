

import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Button,Textarea, useToast, Checkbox, Divider 
  } from '@chakra-ui/react'
import HeaderTopBar from "../HeaderTopBar";

import style from './groupedProduct-styles.module.css'
import { useNavigate } from "react-router-dom";

const GroupedProductForm = ()=>{
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')    
    const [color, setColor] = useState('')
    const [listSimpleProducs, setListSimpleProducs] =useState([])
    const toast = useToast()
    const navigate = useNavigate()
      
    const [produtosSelecionados, setProdutosSelecionados] = useState([]);
    
    const handleSelecaoProduto = (product) => {
      if (produtosSelecionados.includes(product)) {    
        setProdutosSelecionados(produtosSelecionados.filter((p) => p !== product));
      } else {        
        setProdutosSelecionados([...produtosSelecionados, product]);
      }
    };

    useEffect(()=>{
      fetch('http://localhost:4000/api/simple_product')
      .then((res)=> res.json())
      .then((response)=>{
        setListSimpleProducs(response.map((product)=> ({
           id: product.id,
           name: product.name
        } ))  
        )         
      })
    },[])
     
    
    async function saveProduct  () { 

        const grouped_item = {
          "name": name,
          "description": description,
          "value": parseFloat(value),
          "simpleItems": {
            "connect": 
            produtosSelecionados
            
          }
        }    
    
        try {
         await fetch('http://localhost:4000/api/grouped_product', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(grouped_item)
          })
          .then((res) => {
            res.json()
            toast({
                title: 'Produto criado com sucesso!',                 
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            navigate('/')
        })
        .then((response)=>console.log(response))

        } catch (error) {
          console.log(error);
        }
      }

    const isError = false
    
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
                
                <Divider/>
                <FormLabel>Itens Simples</FormLabel>
                <Divider/>
                <div className={style.configurableProduct_form__list_simple}> 
                  { listSimpleProducs && (
                    listSimpleProducs
                      .sort((a, b) => a.name.localeCompare(b.name)) 
                      .map((product)=>(
                        <Checkbox className={style.configurableProduct_form__list_simple_item}
                          checked={produtosSelecionados.includes(product)}
                          onChange={() => handleSelecaoProduto(product)}
                        >
                          {product.name}
                        </Checkbox>
                        
                      ))
                  )}                  
                </div>
                <Divider/>

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