import React, { useState } from "react";
import style from './itemCard-styles.module.css'

import icon_products from '../../assets/icons-produtos.svg'
import ItemCardModal from "../itemCardModal";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Divider,Button, useDisclosure, useToast } from "@chakra-ui/react";



const ItemCard = (props)=>{
    const [isOpenCard, setIsOpenCard] = useState(false);  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast =useToast()
    const isAdmin = true

    const openModalProduct = () => {
        setIsOpenCard(true);
      };
    
      const closeModalItem = () => {
        setIsOpenCard(false);
      };

    async function remover_item(type, id){
    let url='http://localhost:4000/api'

    switch (type ) {
        case 'Produto Simples':
            url+='/simple_product/'
            break;
            case 'Produto Digital':              
            url+='/digital_product/'
            break;
        case 'Produto Configurável':
            url+='/configurable_product/'
            break;
        case 'grouped':
            url+='http://localhost:4000/'
            break; 
        default:
            url+='http://localhost:4000/';
            break;

        }

        console.log(url+id)
    await fetch(url+id, {
        method:'DELETE'
    })
    .then(()=>{
        toast({
            title: 'Produto removido com sucesso!',                 
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    })
}
    return(
        <>
           {isAdmin?(
            <div className={style.cardItem} >
                 <div className={style.cardItem_modify}> 
                    <span className={`material-symbols-outlined ${style.cardItem_modify__edit} `} onClick={openModalProduct}>edit</span>
                    <span className={`material-symbols-outlined ${style.cardItem_modify__delete} `}   onClick={onOpen}  >delete</span>
                </div>
                <Divider/>
                <h1  className={style.cardItem_tittle}>{props.name}</h1>
                <img  className={style.cardItem_icon}  src={icon_products} alt="icone do produto"/>
                <Divider />
                <p className={style.cardItem_description}> 
                    {props.description}
                </p>
                <div className={style.cardItem_type}>
                    <span className="material-symbols-outlined">fiber_manual_record</span>
                    <div className={style.cardItem_type__definition}>
                        {props.type}
                    </div>
                </div>
                <Divider/>
                <div>R${props.value}</div>
               
            </div>
            ) : (
                <div className={style.cardItem} onClick={openModalProduct}>
                    <h1  className={style.cardItem_tittle}>{props.name}</h1>
                    <img  className={style.cardItem_icon}  src={icon_products} alt="icone do produto"/>
                    <Divider />
                    <p className={style.cardItem_description}> 
                        {props.description}
                    </p>
                    <div className={style.cardItem_type}>
                        <span className="material-symbols-outlined">fiber_manual_record</span>
                        <div className={style.cardItem_type__definition}>
                            {props.type}
                        </div>
                    </div>
                    <Divider/>
                    <div>R${props.value}</div>
                </div>
            )}
            {isOpenCard &&(
                <ItemCardModal
                    id={props.id}
                    name={props.name}
                    description={props.description}
                    type={props.type}
                    value={props.value}
                    isOpen={isOpenCard}
                    onClose={closeModalItem}
                />
            )}

        <AlertDialog isOpen={isOpen} onClose={onClose} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent style={{ margin: '40px' }}>
          <AlertDialogHeader>Tem certeza que deseja remover este produto?</AlertDialogHeader>
          <AlertDialogBody>Essa ação não poderá ser desfeita</AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button colorScheme="red" ml={3} onClick={() => remover_item(props.type, props.id) } autoFocus>
              Remover
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>  
      </AlertDialog>

        </>
    )
}

export default ItemCard