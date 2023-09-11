import React from "react";
import style  from './header-styles.module.css'


const removeAdmin =()=>{
    localStorage.removeItem('isAdmin')

}

const HeaderTopBar = (porps)=>{
    return(
        <>
        <header className={style.header_top}>
            {porps.children}      
        </header>        
        
        <div className={style.logout}>
            <a href="/login"  onClick={removeAdmin} className={style.logout__text}>sair</a>          
        </div>
        <a href="/" className={style.header_top__home}>
            <span className="material-symbols-outlined">home</span> Incio
        </a>
        </>
    )
}

export default HeaderTopBar