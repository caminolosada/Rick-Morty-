import { styled } from "styled-components";

const LoadMoreStyled = styled.div`
  .load_button {
    margin: 0 auto;
    margin-bottom: 100px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.deatils};
    width: 254px;
    height: 81px;
    border-radius: 15px;
    font-size: ${(props) => props.theme.fontSize.large};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default LoadMoreStyled;
