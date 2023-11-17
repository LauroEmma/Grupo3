import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaMedkit, FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import SidebarItem from "../SidebarItem";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const usuario = useAuthStore((state) => state.usuario);

  const closeSidebar = () => {
    active(false);
  };
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        {location.pathname !== "/" && (
          <SidebarItem
            Icon={FaHome}
            Text="Home"
            onClick={() => (navigate("/"), closeSidebar())}
          />
        )}
        {location.pathname !== "/plantao" && usuario.plantao !== false && (
          <SidebarItem
            Icon={FaMedkit}
            Text="Plantão"
            onClick={() => (navigate("/plantao"), closeSidebar())}
          />
        )}
        ;
        {location.pathname !== "/perfil" && (
          <SidebarItem
            Icon={FaUserAlt}
            Text="Meu Perfil"
            onClick={() => (navigate("/perfil"), closeSidebar())}
          />
        )}
      </Content>
    </Container>
  );
};

export default Sidebar;
