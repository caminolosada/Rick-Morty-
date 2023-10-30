import { styled } from "styled-components";

const CharacterListPageStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 29px 0 10px;

  .title {
    color: ${(props) => props.theme.colors.generalText};
    font-size: ${(props) => props.theme.fontSize.medium};
    margin-top: 100px;
  }

  .decoration {
    margin-left: 15px;
    margin-top: 100px;
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
