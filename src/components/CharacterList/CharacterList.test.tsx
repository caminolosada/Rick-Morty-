import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CharacterList from "./CharacterList";
import { charactersMock } from "../../mocks/charactersMock";

describe("Given a CharacterList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of characters with one of them named 'Rick Sanchez'", () => {
      renderWithProviders(
        wrapWithRouter(<CharacterList characterProps={charactersMock} />)
      );

      const expectedName = "Rick Sanchez";

      const characterName = screen.getByRole("heading", { name: expectedName });

      expect(characterName).toBeInTheDocument();
    });
  });
});
