import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../utils/testUtils";
import CharacterListPage from "./CharacterListPage";

const renderCharacterListPage = () => {
  renderWithProviders(wrapWithRouter(<CharacterListPage />));
};
describe("Given a CharacterListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Characters'", () => {
      renderCharacterListPage();
      const expectedTitle = "Characters";

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a decoration element with the alternative text 'decorative separating line'", () => {
      renderCharacterListPage();
      const expectedAlternativeText = "decorative separating line";

      const decoration = screen.getByAltText(expectedAlternativeText);

      expect(decoration).toBeInTheDocument();
    });
  });
});
