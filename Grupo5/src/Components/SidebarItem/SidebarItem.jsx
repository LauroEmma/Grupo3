import React from "react";
import { Container } from "../Header/styles";

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
