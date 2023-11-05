import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaMedkit, FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import SidebarItem from "../SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active} const navigate={useNavigate()}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" onClick={() => navigate("/")} />
        <SidebarItem
          Icon={FaMedkit}
          Text="Plantão"
          onClick={() => navigate("/plantao")}
        />
        <SidebarItem
          Icon={FaUserAlt}
          Text="Meu Perfil"
          onClick={() => navigate("/perfil")}
        />
        <SidebarItem
          Icon={FiLogIn}
          Text="Login"
          onClick={() => navigate("/login")}
        />
        <SidebarItem
          Icon={BsFillPersonLinesFill}
          Text="Cadastro"
          onClick={() => navigate("/cadastro")}
        />
      </Content>
    </Container>
  );
};

export default Sidebar;
