import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import ModalBodySimpleProduct from '../ModalBodySimpleProduct'
import ModalBodyDigitalProduct from '../ModalBodyDigitalProduct'
import ModalBodyConfigurableProduct from '../ModalBodyConfigurableProduct'
import ModalBodyGroupedProduct from '../ModalBodyGroupedProduct'


const ItemCardModal = (props) =>{       
  const isAdminValue  = localStorage.getItem('isAdmin')
  const isAdmin = JSON.parse(isAdminValue);
  return (
      props.type && (
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay />
        <ModalContent  style={{marginLeft:'20px', marginRight:'20px'}}>
          
          {props.type ==="Produto Simples" &&
            <ModalBodySimpleProduct
              id={props.id}
              isAdmin={isAdmin}
              name={props.name}
              description={props.description}
              type={props.type}             
              value={props.value}
              onClose={props.onClose}
            />
          }         
          {props.type ==="Produto Digital" &&
            <ModalBodyDigitalProduct
              id={props.id}
              isAdmin={isAdmin}
              name={props.name}
              description={props.description}
              type={props.type}             
              value={props.value}
              onClose={props.onClose}
            />
          }         
          {props.type ==="Produto Configurável" &&
            <ModalBodyConfigurableProduct
              id={props.id}
              isAdmin={isAdmin}
              name={props.name}
              description={props.description}
              type={props.type}             
              value={props.value}
              onClose={props.onClose}
            />
          }         
          {props.type ==="Produto Agrupado" &&
            <ModalBodyGroupedProduct
              id={props.id}
              isAdmin={isAdmin}
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