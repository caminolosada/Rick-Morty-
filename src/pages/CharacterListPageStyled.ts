import { styled } from "styled-components";

const CharacterListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  .title {
    gap: 15px;
    display: flex;
    flex-direction: row;

    &__name {
      color: ${(props) => props.theme.colors.generalText};
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.bold};

      @media (min-width: 600px) {
        font-size: ${(props) => props.theme.fontSize.large};
      }
      @media (min-width: 950px) {
        font-size: ${(props) => props.theme.fontSize.extraLarge};
      }
    }

    &__decoration {
      width: calc(100% - 29px);
      height: auto;
      display: block;
    }

    @media (max-width: 2000px) {
      width: calc(100% - 0px);
    }
  }
`;

export default CharacterListPageStyled;
