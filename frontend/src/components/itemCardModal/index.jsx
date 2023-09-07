import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure, 
    Button
  } from '@chakra-ui/react'

import style from './itemCardModal-styles.module.css'
import icon from '../../assets/icons-produtos.svg'

const ItemCardModal = (props) =>{
    const {  onClose } = useDisclosure()
    return (
      <>
        
  
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {props.name}
              <img src={icon}/>
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
                R${props.price}
              </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Fechar
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


  export default ItemCardModal