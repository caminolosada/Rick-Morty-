import { styled } from "styled-components";

const CharacterCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border: 3px solid ${(props) => props.theme.colors.deatils};
  border-radius: 15px;
  padding-top: 30px;
  height: 385px;
  width: 262px;

  .character-image {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    object-fit: cover;
  }

  .character-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__name {
      color: ${(props) => props.theme.colors.deatils};
      font-size: ${(props) => props.theme.fontSize.mediumLarge};
      font-weight: ${(props) => props.theme.fontWeight.bold};
      margin-top: 157px;
    }

    &__species {
      color: ${(props) => props.theme.colors.generalText};
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      margin-top: 8px;
    }

    &__ubication {
      color: ${(props) => props.theme.colors.generalText};
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      max-width: 160px;
      margin-top: 8px;
    }
  }
`;

export default CharacterCardStyled;
