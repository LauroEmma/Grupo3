import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaHome, FaMedkit, FaUserAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaMedkit} Text="Plantão" />
        <SidebarItem Icon={FaUserAlt} Text="Meu Perfil" />
        <SidebarItem Icon={FiLogIn} Text="Login" />
        <SidebarItem Icon={BsFillPersonLinesFill} Text="Cadastro" />
      </Content>
    </Container>
  );
};

export default Sidebar;
