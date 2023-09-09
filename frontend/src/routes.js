import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import ProductRegistration from "./pages/ProductRegistration";
import Cadastro from "./pages/Cadastro";


const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration/simple" element={<ProductRegistration typeRegister="simple"/>}/>
                <Route path="/registration/digital" element={<ProductRegistration typeRegister="digital"/>}/>
                <Route path="/registration/configurable" element={<ProductRegistration typeRegister="configurable"/>}/>
                <Route path="/registration/simple" element={<ProductRegistration typeRegister="simple"/>}/>
                <Route path="/registration/grouped" element={<ProductRegistration typeRegister="grouped"/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp