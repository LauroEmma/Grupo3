import {
    Routerprovider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Aba_Plantao from "./Pages/Aba-Plantao";
import Menu from "./Pages/Menu";
import Perfil from "./Pages/Perfil";

const router =createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />}/>
            <Route path="Cadastro" element={<Cadastro />}/>
            <Route path="Login" element={<Login />}/>
            <Route path="Aba_plantao" element={<Aba_Plantao />}/>
            <Route path="Menu" element={<Menu />}/>
            <Route path="Perfil" element={<Perfil />}/>
        </Route>
    )
)
export default function Routes(){
    return <Routerprovider router = {router}/>
}