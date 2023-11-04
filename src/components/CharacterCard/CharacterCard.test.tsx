import { screen } from "@testing-library/react";
import { charactersMock } from "../../mocks/charactersMock";
import { renderWithProviders } from "../../utils/testUtils";
import CharacterCard from "./CharacterCard";

beforeEach(() => {
  renderWithProviders(
    <CharacterCard characterProps={charactersMock.results[0]} />
  );
});

describe("Given a CharacterCard component", () => {
  describe("When it receives the character 'Rick Sanchez'", () => {
    test("Then it should show an image with the alternative text 'Rick Sanchez'", () => {
      const expectedAlternativeText = `${charactersMock.results[0].name}`;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
    test("Then it should show the character's name", () => {
      const expectedCharacterName = `${charactersMock.results[0].name}`;

      const characterName = screen.getByRole("heading", {
        name: expectedCharacterName,
      });
      expect(characterName).toBeInTheDocument();
    });

    test("Then it should show the character's specie", () => {
      const expectedCharacterSpecie = `${charactersMock.results[0].species}`;

      const characterSpecie = screen.getByText(expectedCharacterSpecie);

      expect(characterSpecie).toBeInTheDocument();
    });

    test("Then it should show the character's ubication", () => {
      const expectedCharacterUbication = `${charactersMock.results[0].location.name}`;

      const characterUbication = screen.getByText(expectedCharacterUbication);

      expect(characterUbication).toBeInTheDocument();
    });
  });
});
