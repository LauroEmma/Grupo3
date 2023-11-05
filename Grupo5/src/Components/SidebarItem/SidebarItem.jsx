import React from "react";
import { Container } from "./styles";

const SidebarItem = ({ Icon, Text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
