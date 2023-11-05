import styled from "styled-components";

const SearchStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .search {
    &__label {
      display: flex;
      border-radius: 10px;
    }
    &__input {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      border: 3px solid ${(props) => props.theme.colors.background};
      outline: none;
      width: 100%;
      padding: 10px;
      color: ${(props) => props.theme.colors.generalText};
      &::placeholder {
        color: ${(props) => props.theme.colors.generalText};
        font-family: ${(props) => props.theme.fonts.primary};
      }
    }
  }

  @media (min-width: 600px) {
    .search__input {
      min-height: 40px;
      min-width: 262px;
    }
  }

  @media (min-width: 950px) {
    .search__input {
      min-height: 50px;
      min-width: 500px;
      font-size: ${(props) => props.theme.fontSize.mediumLarge};
    }
  }

  @media (min-width: 1200px) {
    .search__input {
      min-height: 60px;
      min-width: 784px;
      font-size: ${(props) => props.theme.fontSize.mediumLarge};
    }
  }
`;

export default SearchStyled;
