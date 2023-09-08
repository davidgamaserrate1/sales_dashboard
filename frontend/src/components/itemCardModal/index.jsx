import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import ModalBodySimpleProduct from '../ModalBodySimpleProduct'


const ItemCardModal = (props) =>{       
  const admin = true

  return (
      props.type && (
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent  style={{marginLeft:'20px', marginRight:'20px'}}>
          
          {props.type ==="Produto Simples" &&
            <ModalBodySimpleProduct
              id={props.id}
              isAdmin={admin}
              name={props.name}
              description={props.description}
              type={props.type}             
              value={props.value}
              onClose={props.onClose}
            />
          }         
         
        </ModalContent>
      </Modal>)  
  )
}


export default ItemCardModal