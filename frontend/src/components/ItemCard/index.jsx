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
                <h1  className={style.cardItem_tittle}>{props.name}</h1>
                <img  className={style.cardItem_icon}  src={icon_products} alt="icone do produto"/>
                
                <p className={style.cardItem_description}> 
                    {props.description}
                </p>
                <div className={style.cardItem_type}>
                    <span class="material-symbols-outlined">fiber_manual_record</span>
                    <div className={style.cardItem_type__definition}>
                        {props.type}
                    </div>
                </div>
                <div>R${props.value}</div>
            </div>

            {isOpenCard &&(
                <ItemCardModal
                    isOpen={isOpenCard}
                    onClose={closeModalItem}
                    name={props.name}
                    description={props.description}
                    type={props.type}
                    value={props.value}
                />
            )}

        </>
    )
}

export default ItemCard