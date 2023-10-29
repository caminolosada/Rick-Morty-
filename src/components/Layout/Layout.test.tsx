import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Rick&Morty's logo with the alternative text 'rick and morty logo'", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAlternativeText = "rick and morty logo";

      const rickMortyLogo = screen.getByRole("img", {
        name: expectedAlternativeText,
      });
      expect(rickMortyLogo).toBeInTheDocument();
    });
  });
});
