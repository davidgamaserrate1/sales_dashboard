import React, { useEffect, useState } from "react";
import SimpleProductForm from "../../components/SimpleProductForm";


const ProductRegistration = (props)=>{
    const [simple_product, setSimple_product] = useState(false)
    const [digital_product, setDigital_product] = useState(false)
    const [configurable_product, setConfigurable_product] = useState(false)
    const [grouped_product, setGrouped_product] = useState(false)
    
    useEffect(()=>{
        switch (props.typeRegister ) {
            case 'simple':
                setSimple_product(true)
              break;
            case 'digital':
                setDigital_product(true)
              break;
            case 'configurable':
                setConfigurable_product(true)
              break;
            case 'grouped':
                setGrouped_product(true)
              break;
             
            default:
                setSimple_product(false)
          }
    },[])
    
      return (
        <div>
            {simple_product && (<SimpleProductForm/>)}
             
                  
             
        </div>
    )
}

export default ProductRegistration