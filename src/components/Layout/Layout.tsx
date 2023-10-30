import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import CharacterListPage from "../../pages/CharacterListPage";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Outlet />
      <Header />
      <CharacterListPage />
    </ContainerStyled>
  );
};

export default Layout;
