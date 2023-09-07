import React from "react";
import style  from './header-styles.module.css'

const HeaderTopBar = (porps)=>{
    return(
        <header className={style.header_top}>
            {porps.children}
        </header>
    )
}

export default HeaderTopBar