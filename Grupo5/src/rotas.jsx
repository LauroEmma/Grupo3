import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Plantao from "./Pages/Plantao/Plantao";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Perfil from "./Pages/Perfil/Perfil";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="Plantao" element={<Plantao />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
