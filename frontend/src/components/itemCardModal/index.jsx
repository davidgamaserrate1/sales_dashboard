import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    Button
  } from '@chakra-ui/react'

import style from './itemCardModal-styles.module.css'
import icon from '../../assets/icons-produtos.svg'

const ItemCardModal = (props) =>{     
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
          <ModalOverlay />
          <ModalContent  style={{marginLeft:'20px', marginRight:'20px'}}>
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
                <span class="material-symbols-outlined">fiber_manual_record</span>
                <div className={style.cardItem_type__definition}>
                  {props.type}
                </div>
              </div>
              <div>
                R${props.value}
              </div>
            </ModalBody>
  
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