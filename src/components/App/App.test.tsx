import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Rick&Morty's logo with the alternative text 'rick and morty logo'", () => {
      renderWithProviders(wrapWithRouter(<App />));

      const expectedAlternativeText = "rick and morty logo";

      const rickMortyLogo = screen.getByRole("img", {
        name: expectedAlternativeText,
      });
      expect(rickMortyLogo).toBeInTheDocument();
    });
  });
});
