import React, { useEffect, useState } from "react";
import HeaderTopBar from "../../components/HeaderTopBar";
import ItemCard from "../../components/ItemCard";
import style from './home-styles.module.css'
import AddProduct from "../../components/AddProduct";

 
const Home = ()=>{
    const [items, setItems]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/api/list_products')
        .then((res)=>res.json())
        .then((items)=>setItems(items))
    })
    

    return(
        <>
            <HeaderTopBar 
            location="home">                       
            </HeaderTopBar>
            <AddProduct/>
          
            <div className={style.items_container}>
                {items.map((item)=>(
                    <ItemCard 
                        key={item.id + item.name}
                        id={item.id}
                        name ={item.name}
                        description={item.description}
                        type={item.type}
                        value={item.value}
                    />
                ))}
            </div>
             
        </>
    )
}

export default Home