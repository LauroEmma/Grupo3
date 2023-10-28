import {
    RouterProvider,
    CreateBrowser,
    Route,
    createRoutesFromElements,
    createBrowserRouter
} from "react-router-dom"

import Home from "./Pages/Home/Home"
import Plantao from "./Pages/Plantao/Plantao"
import Cadastro from "./Pages/Cadastro/Cadastro"
import Perfil from "./Pages/Perfil/Perfil"
import Menu from "./Pages/Menu/Menu"
import Login from "./Pages/Login/Login"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element = {<Home/>}/>
            <Route path="Login" element = {<Login/>}/>
            <Route path="Perfil" element = {<Perfil/>}/>
            <Route path="Menu" element = {<Menu/>}/>
            <Route path="Cadastro" element = {<Cadastro/>}/>
            <Route path="Plantao" element = {<Plantao/>}/>
        </Route>
    )
)
