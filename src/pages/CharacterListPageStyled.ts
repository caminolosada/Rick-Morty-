import { styled } from "styled-components";

const CharacterListPageStyled = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-top: 100px;
    margin-bottom: 20px;
  }

  .decoration {
    margin-left: 15px;
    margin-top: 80px;
    width: calc(100% - 150px);

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    @media (max-width: 768px) {
      width: calc(100% - 100px);
    }
  }
`;

export default CharacterListPageStyled;
