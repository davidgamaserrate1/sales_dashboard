import React, { useState } from "react";
import style from './itemCard-styles.module.css'

import icon_products from '../../assets/icons-produtos.svg'
import ItemCardModal from "../itemCardModal";

const ItemCard = (props)=>{
    const [isOpenCard, setIsOpenCard] = useState(false);  
    
    const openModalProduct = () => {
        setIsOpenCard(true);
      };
    
      const closeModalItem = () => {
        setIsOpenCard(false);
      };
    return(
        <>
            <div className={style.cardItem} onClick={openModalProduct}>
                <h1  className={style.cardItem_tittle}>nome</h1>
                <img  className={style.cardItem_icon}  src={icon_products}/>
                
                <p className={style.cardItem_description}> 
                    descrição completa do item
                </p>
                <div className={style.cardItem_type}>
                    <span class="material-symbols-outlined">fiber_manual_record</span>
                    <div className={style.cardItem_type__definition}>
                        Simples
                    </div>
                </div>
                <div>R$100</div>
            </div>

            {isOpenCard &&(
                <ItemCardModal
                    isOpen={isOpenCard}
                    onClose={closeModalItem}
                    name="nome"
                    description="descrição completa do item"
                    type="Simples"
                    price="100"
                />
            )}

        </>
    )
}

export default ItemCard