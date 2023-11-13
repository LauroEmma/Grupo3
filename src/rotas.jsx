import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Plantao from "./Pages/Plantao/Plantao";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Perfil from "./Pages/Perfil/Perfil";
import Login from "./Pages/Login/Login";
import AppLayout from "./Layouts/AppLayouts/AppLayouts";
import AppLayoutEntrada from "./Layouts/AppLayouts/AppLayouts";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;

  return <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="plantao" element={<Plantao />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
