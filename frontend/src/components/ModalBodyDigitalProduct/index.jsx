import { Button, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea,  useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from './modalBodySimpleProduct-styles.module.css'
import icon from '../../assets/icons-produtos.svg'



const ModalBodySimpleProduct =(props)=>{
    const id = props.id
    const [notModify, setNotModify] = useState(true)
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)    
    const [value, setValue] = useState(props.value)
    const [linkDownload, setLinkDownload] = useState(props.linkDownload)
    
    const toast = useToast()
    
    const item = {
        id,
        name, 
        description,
        value
    }

    useEffect(()=>{
        const receiveditem = {
            id:  props.id,
            name : props.name, 
            description : props.description,
            value : props.value
        }

        let isModified = receiveditem.name === item.name && 
                receiveditem.description === item.description && 
                receiveditem.value === item.value;
        setNotModify(isModified)
    },[props.id, props.name, props.description, props.value, item.name, item.description, item.value]);
 
    async function updateSimpleItem(item){
        const sendItem = {
            name : item.name, 
            description : item.description,
            value : parseFloat(item.value)
        }
        
        await fetch(`http://localhost:4000/api/digital_product/${item.id}`, {
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

export default ModalBodySimpleProduct