import { styled } from "styled-components";

const CharacterListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default CharacterListStyled;
