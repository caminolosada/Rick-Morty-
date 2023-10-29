import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      generalText: string;
      deatils: string;
    };

    fonts: {
      primary: string;
    };

    fontSize: {
      small: string;
      medium: string;
      mediumLarge: string;
      large: string;
      extraLarge: string;
    };

    fontWeight: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}

export default DefaultTheme;
