import React, { useEffect, useState } from "react";
import HeaderTopBar from "../../components/HeaderTopBar";
import ItemCard from "../../components/ItemCard";
import style from './home-styles.module.css'
import AddProduct from "../../components/AddProduct";

 
// const items =[

//     {
//         "name": "1 Teste 1",
//         "description": "descrição completa do item",
//         "type": "Producto Simples",
//         "value": "100",
//     },
//     {
//         "name": "Teste 2",
//         "description": "descrição completa do item",
//         "type": "Producto Digital",
//         "value": "100",
//     },
//     {
//         "name": "Teste 3",
//         "description": "descrição completa do item",
//         "type": "Producto Simples",
//         "value": "300",
//     },
//     {
//         "name": "Teste 4",
//         "description": "descrição completa do item",
//         "type": "Producto Configuravel",
//         "value": "100",
//     },
//     {
//         "name": "Teste 5",
//         "description": "descrição completa do item",
//         "type": "Producto Simples",
//         "value": "100",
//     },
// ]

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