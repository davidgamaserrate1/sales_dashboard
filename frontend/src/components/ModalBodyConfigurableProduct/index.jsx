import { Button, FormLabel, Input, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Textarea,  useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from './modalBodyConfigurableProduct-styles.module.css'
import icon from '../../assets/icons-produtos.svg'


const ModalBodyConfigurableProduct =(props)=>{
    const id = props.id

    const [item, setItem] = useState()
    const [name, setName] = useState()
    const [description, setDescription] = useState()    
    const [value, setValue] = useState()
    const [size, setSize] = useState()
    const [color, setColor] = useState()
    
    
    const toast = useToast()

    useEffect(()=>{
        fetch(`http://localhost:4000/api/configurable_product/${id}`)
        .then((res)=> res.json())
        .then((response)=>{
            console.log(response)
            setItem(response)
            setName(response.name)
            setDescription(response.description)
            setValue(response.value)
            setSize(response.size)
            setColor(response.color)
        })
        
    },[id]);
 
    async function updateSimpleItem(item){
        const sendItem = {
            name : name, 
            description : description,
            value : parseFloat(value),
            size : size, 
            color : color
        }
        console.log(JSON.stringify(sendItem))
        
        await fetch(`http://localhost:4000/api/configurable_product/${id}`, {
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
        {props.isAdmin ?(
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
               
                <FormLabel>Tamanho do produto </FormLabel>
                <Input 
                    type="text"
                    value={size}
                    onChange={(e)=>setSize(e.target.value)}
                />
                <FormLabel>Cor do produto </FormLabel>
                <Input 
                    type="text"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                />
                <FormLabel>Valor do produdo </FormLabel>
                <Input 
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                 <ModalFooter>
                   <Button colorScheme='green' onClick={()=>updateSimpleItem(item)}>Atualizar</Button>
                </ModalFooter>
            </ModalBody>
            </>
        )
        :(
            <>
            <ModalHeader>
                <h2 className={style.cardItem_name}>
                    {name}
                </h2>
                <img className={style.cardItem_icon} src={icon} alt='icone do produto'/>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div>
                    <p>
                        {props.description}
                    </p>
                    <div className={style.cardItem_type}>
                        <span className="material-symbols-outlined">fiber_manual_record</span>                    
                        <div className={style.cardItem_type__definition}>
                            {props.type}
                        </div>                    
                    </div>

                    <div  className={style.cardItem_info}>
                        <div className={style.cardItem_info__value}>
                            {size}                    
                        </div>
                        <div className={style.cardItem_info__value}>
                            {color}
                        </div>
                    </div>

                    <div>
                        R${value}
                    </div>
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

export default ModalBodyConfigurableProduct