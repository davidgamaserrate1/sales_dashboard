import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}