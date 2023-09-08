import React from "react";
import style  from './header-styles.module.css'

const HeaderTopBar = (porps)=>{
    return(
        <>
            <header className={style.header_top}>
                {porps.children}
            </header>        
            <a href="/" className={style.header_top__home}>
                <span class="material-symbols-outlined">home</span> Incio
            </a>
        </>
    )
}

export default HeaderTopBar