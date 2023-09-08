import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductRegistration from "./pages/ProductRegistration";

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration/simple" element={<ProductRegistration typeRegister="simple"/>}/>
                <Route path="/registration/digital" element={<ProductRegistration typeRegister="digital"/>}/>
                <Route path="/registration/configurable" element={<ProductRegistration typeRegister="configurable"/>}/>
                <Route path="/registration/simple" element={<ProductRegistration typeRegister="simple"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp