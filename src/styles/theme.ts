import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/nunito";

const theme: DefaultTheme = {
  colors: {
    background: "#0f2e40",
    primary: "#0d7c85",
    secondary: "#cbcb94",
    generalText: "#ffffff",
    deatils: "#dae581",
  },

  fonts: {
    primary: "Nunito",
  },

  fontSize: {
    small: "20px",
    medium: "22px",
    mediumLarge: "25px",
    large: "32px",
    extraLarge: "50px",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

export default theme;
