import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Rick&Morty's logo with the alternative text 'rick and morty logo'", () => {
      renderWithProviders(wrapWithRouter(<Header />));

      const expectedAlternativeText = "rick and morty logo";

      const rickMortyLogo = screen.getByAltText(expectedAlternativeText);

      expect(rickMortyLogo).toBeInTheDocument();
    });
  });
});
