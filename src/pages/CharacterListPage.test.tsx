import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../utils/testUtils";
import CharacterListPage from "./CharacterListPage";
import { store } from "../store";

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

    test("Then it should show a button with the text 'Load more'", () => {
      renderCharacterListPage();
      const expectedText = "Load more";

      const loadMoreButton = screen.getByRole("button", { name: expectedText });

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When an user clicks on 'Load more' button", () => {
    test("Then it should show the new chartacters' collecion", async () => {
      renderCharacterListPage();
      const expectedText = "Load more";
      const expectedCharacterCollectionLength = 4;

      const loadMoreButton = screen.getByRole("button", {
        name: expectedText,
      });

      await userEvent.click(loadMoreButton);

      const newCharactersCollectionLength =
        store.getState().characters.results.length;

      expect(newCharactersCollectionLength).toBe(
        expectedCharacterCollectionLength
      );
    });
  });
});
