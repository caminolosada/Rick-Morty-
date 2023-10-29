import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Outlet />
      <Header />
    </ContainerStyled>
  );
};

export default Layout;
