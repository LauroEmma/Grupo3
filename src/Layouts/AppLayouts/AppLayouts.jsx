import { Container } from "./Style";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
