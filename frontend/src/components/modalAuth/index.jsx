import React from "react";
import style from './modalAuth-styles.module.css'

const ModalAuth = (props) =>{
    return(
        <div className={style.login_page}>
            <div className={style.login_modal}>
                {props.children}
            </div>
        </div>
    )
}

export default ModalAuth


