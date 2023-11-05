import { screen } from "@testing-library/react";
import { charactersMock, rareCharactersMock } from "../../mocks/charactersMock";
import { renderWithProviders } from "../../utils/testUtils";
import CharacterCard from "./CharacterCard";

describe("Given a CharacterCard component", () => {
  describe("When it receives the character 'Rick Sanchez'", () => {
    test("Then it should show an image with the alternative text 'Rick Sanchez'", () => {
      renderWithProviders(
        <CharacterCard characterProps={charactersMock.results[0]} />
      );
      const expectedAlternativeText = `${charactersMock.results[0].name}`;

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
    test("Then it should show the character's name", () => {
      renderWithProviders(
        <CharacterCard characterProps={charactersMock.results[0]} />
      );
      const expectedCharacterName = `${charactersMock.results[0].name}`;

      const characterName = screen.getByRole("heading", {
        name: expectedCharacterName,
      });
      expect(characterName).toBeInTheDocument();
    });

    test("Then it should show the character's specie", () => {
      renderWithProviders(
        <CharacterCard characterProps={charactersMock.results[0]} />
      );
      const expectedCharacterSpecie = `${charactersMock.results[0].species}`;

      const characterSpecie = screen.getByText(expectedCharacterSpecie);

      expect(characterSpecie).toBeInTheDocument();
    });

    test("Then it should show the character's ubication", () => {
      renderWithProviders(
        <CharacterCard characterProps={charactersMock.results[0]} />
      );
      const expectedCharacterUbication = `${charactersMock.results[0].location.name}`;

      const characterUbication = screen.getByText(expectedCharacterUbication);

      expect(characterUbication).toBeInTheDocument();
    });
  });
  describe("When it is rendered and receives a character which status is 'Alive'", () => {
    test("Then it should show the information 'You can find me in'", () => {
      renderWithProviders(
        <CharacterCard characterProps={charactersMock.results[0]} />
      );

      const expectedInformation = "You can find me in";

      const information = screen.getByText(expectedInformation);

      expect(information).toBeInTheDocument();
    });
  });
  describe("When it is rendered and receives a character which status is 'Dead'", () => {
    test("Then it should show the information 'You can not find me because I am'", () => {
      renderWithProviders(
        <CharacterCard characterProps={rareCharactersMock.results[1]} />
      );

      const expectedInformation = "You can not find me because I am";

      const information = screen.getByText(expectedInformation);

      expect(information).toBeInTheDocument();
    });
  });
  describe("When it is rendered and receives a character which status is 'unknown'", () => {
    test("Then it should show the information 'Sorry, mate, I can not give you more information about myself'", () => {
      renderWithProviders(
        <CharacterCard characterProps={rareCharactersMock.results[0]} />
      );

      const expectedInformation =
        "Sorry, mate, I can not give you more information about myself";

      const information = screen.getByText(expectedInformation);

      expect(information).toBeInTheDocument();
    });
  });
  describe("When it is rendered and receives a character which especie is 'unknown'", () => {
    test("Then it should show the information 'Who knows?'", () => {
      renderWithProviders(
        <CharacterCard characterProps={rareCharactersMock.results[0]} />
      );

      const expectedInformation = "Who knows?";

      const information = screen.getByText(expectedInformation);

      expect(information).toBeInTheDocument();
    });
  });
});
