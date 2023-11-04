import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  padding: 50px 0px;

  .logo {
    @media (min-width: 600px) {
      width: 393px;
      height: 95.76px;
    }

    @media (min-width: 950px) {
      width: 524px;
      height: 127.68px;
    }
  }
`;

export default HeaderStyled;
