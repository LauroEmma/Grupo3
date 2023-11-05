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
import Header from "./Components/Header";

const Pagina = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Pagina>
            <Home />
          </Pagina>
        }
      />
      <Route
        path="login"
        element={
          <Pagina>
            <Login />
          </Pagina>
        }
      />
      <Route
        path="perfil"
        element={
          <Pagina>
            <Perfil />
          </Pagina>
        }
      />
      <Route
        path="cadastro"
        element={
          <Pagina>
            <Cadastro />
          </Pagina>
        }
      />
      <Route
        path="plantao"
        element={
          <Pagina>
            <Plantao />
          </Pagina>
        }
      />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
