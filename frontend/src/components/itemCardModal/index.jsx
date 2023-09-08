import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    Button,
    Input,
    Textarea,
    FormLabel
  } from '@chakra-ui/react'

import style from './itemCardModal-styles.module.css'
import icon from '../../assets/icons-produtos.svg'
import { useState } from 'react'
{/* <ItemCardModal
                    isOpen={isOpenCard}
                    onClose={closeModalItem}
                    name={props.name}
                    description={props.description}
                    type={props.type}
                    value={props.value}
                /> */}
const ItemCardModal = (props) =>{     
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)    
    const [value, setValue] = useState(props.value)
    
    const admin = false

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
          <ModalOverlay />
          <ModalContent  style={{marginLeft:'20px', marginRight:'20px'}}>
            {admin  ? (
             <>
              <ModalHeader>
                <FormLabel>Nome do produto</FormLabel>
                <Input className={style.cardItem_name} 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <img className={style.cardItem_icon} src={icon} alt='icone do produto'/>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormLabel>Descrição do produto</FormLabel>
                <Textarea 
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                />
                  
                 
                <div className={style.cardItem_type}>
                  <span class="material-symbols-outlined">fiber_manual_record</span>
                  <div className={style.cardItem_type__definition}>
                    {props.type}
                  </div>
                </div>
                <FormLabel>Valor do produto</FormLabel>
                <Input   
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
                />
                 
              </ModalBody>
             </>
            ) : (
            <>
              <ModalHeader>
                <h2 className={style.cardItem_name}>
                {name}
                </h2>
                <img className={style.cardItem_icon} src={icon} alt='icone do produto'/>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>
                  {description}
                </p>
                <div className={style.cardItem_type}>
                  <span class="material-symbols-outlined">fiber_manual_record</span>
                  <div className={style.cardItem_type__definition}>
                    {props.type}
                  </div>
                </div>
                <div>
                  R${props.value}
                </div>
              </ModalBody>
            </>) }
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                Fechar
              </Button>
              <Button variant='ghost'>Comprar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }


  export default ItemCardModal