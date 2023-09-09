import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button , 
    Tooltip 
  } from '@chakra-ui/react'

  import style from './addProduct-styles.module.css'


const AddProduct = ()=>{
    return(
        <Menu> 
            <MenuButton as={Button} rightIcon={<span className="material-symbols-outlined">expand_more</span>}
                style={{background:"#3F5E60", color:"#fff", display:'flex', justifyContent:'center', alignItems:'center', margin:'32px auto'}}
            >
                Adicionar Produto
            </MenuButton>
            <MenuList>
                <MenuItem className={style.menu_item}>
                    <a href="/registration/simple"> Produto Simples</a> 
                    <Tooltip label="Produto que não possui especificações detalhadas(como por exemplo, cor, tamanho, peso, etc.)" aria-label='A tooltip'>
                       <span className="material-symbols-outlined">
                            help
                        </span>
                    </Tooltip>
                </MenuItem>
                <MenuItem className={style.menu_item}>                    
                    <a href="/registration/digital"> Produto Digital</a> 
                    <Tooltip label="produtos que não existem fisicamente e não são enviados para o cliente." aria-label='A tooltip'>
                       <span className="material-symbols-outlined">
                            help
                        </span>
                    </Tooltip>
                </MenuItem>
                <MenuItem className={style.menu_item}>
                    <a href="/registration/configurable"> Produto Configurável</a> 
                    <Tooltip label="Recomendável para quando quando se precisa cadastrar um produto que praticamente seja o mesmo, mas varia em uma caracterís-tica, como por exemplo tamanho." aria-label='A tooltip'>
                       <span className="material-symbols-outlined">
                            help
                        </span>
                    </Tooltip>
                </MenuItem>
                <MenuItem className={style.menu_item}>
                    <a href="/registration/grouped"> Produto Agrupado</a> 
                    
                    <Tooltip label="caracterizado por ser a reunião (o agrupamento) de produtos simples" aria-label='A tooltip'>
                       <span className="material-symbols-outlined">
                            help
                        </span>
                    </Tooltip>
                </MenuItem>            
            </MenuList>
        </Menu>
    )
}

export default AddProduct