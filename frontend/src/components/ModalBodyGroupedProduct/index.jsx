
import { Box, Button, Divider, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea,  useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from './ModalBodyGroupedProduct-styles.module.css'
import icon from '../../assets/icons-produtos.svg'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


const ModalBodyGroupedProduct =(props)=>{
    const id = props.id
    const [notModify, setNotModify] = useState(true)
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)    
    const [value, setValue] = useState(props.value)
    const toast = useToast()
    
    const [itens_associados, setItens_associados]=useState([])
    const item = {
        id,
        name, 
        description,
        value
    }
    
    useEffect(()=>{
        fetch(`http://localhost:4000/api/grouped_product/${props.id}`)
        .then((res)=>res.json())
        .then( (response)=>{
            setItens_associados
            ( response.simpleItems.map((item)=> (
                {
                    name: item.name,
                    description: item.description      
                } )) 
            )               
        })         
    },[id]);
 
    async function updateSimpleItem(item){
        const sendItem = {
            name : item.name, 
            description : item.description,
            value : parseFloat(item.value)
        }
        
        await fetch(`http://localhost:4000/api/simple_product/${item.id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json' 
              },
            body:JSON.stringify(sendItem)
        })
        .then((res)=>res.json())
        .then(()=>{
            toast({
                title: 'Produto atualizado com sucesso!',                 
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            props.onClose()
        })
    }
    
    return(
    <>
        {props.isAdmin?(
            <>
            <ModalHeader>
                
                <FormLabel>Nome do produdo </FormLabel>
                <Input 
                    className={style.cardItem_name}
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
            <img className={style.cardItem_icon} src={icon} alt='icone do produto'/>

            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormLabel>Descrição do produdo </FormLabel>
                <Textarea 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />   
                {itens_associados.length > 0 && (
                <>
                <FormLabel mt={4}> Produtos associados </FormLabel>      
                
                <Accordion allowToggle>
                    {itens_associados.map((item=>(                        
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                {item.name}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            {item.description}
                            <Divider/>
                            </AccordionPanel>
                        </AccordionItem>
                    )))}

                
                </Accordion>   
                </>
                )}
                <div className={style.cardItem_type}>
                <span className="material-symbols-outlined">fiber_manual_record</span>
                <div className={style.cardItem_type__definition}>
                    {props.type}
                </div>
                </div> 
                <FormLabel>Valor do produdo </FormLabel>
                <Input 
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                 <ModalFooter>
                   { !notModify && <Button colorScheme='green' onClick={()=>updateSimpleItem(item)}>Atualizar</Button>}
                </ModalFooter>
            </ModalBody>
            </>
        )
        :(
            <>
            <ModalHeader>
                <h2 className={style.cardItem_name}>
                {props.name}
                </h2>
                <img className={style.cardItem_icon} src={icon} alt='icone do produto'/>
                </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>
                {props.description}
                </p>
                <div className={style.cardItem_type}>
                <span className="material-symbols-outlined">fiber_manual_record</span>
                <div className={style.cardItem_type__definition}>
                    {props.type}
                </div>
                </div>
                <div>
                R${props.value}
               </div>
                <ModalFooter>
                  <Button colorScheme='green' >Comprar</Button> 
                  <Button variant='ghost' onClick={props.onClose} >Fechar</Button> 
                </ModalFooter>
            </ModalBody>
            </>
        )}
    </>
    )
    
}

export default ModalBodyGroupedProduct