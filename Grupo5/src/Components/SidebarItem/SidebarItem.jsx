import React from "react";
import { Container } from "./styles";

const SidebarItem = ({ Icon, Text, props }) => {
  return (
    <Container onClick={props.onLick}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
