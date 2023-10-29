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
    small: "1.25 rem",
    medium: "1.375 rem",
    mediumLarge: "1.563 rem",
    large: "2 rem",
    extraLarge: "3.125 rem",
  },

  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

export default theme;
