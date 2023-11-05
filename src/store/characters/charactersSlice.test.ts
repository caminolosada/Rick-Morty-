import {
  charactersMock,
  emptyMock,
  loadMoreCharactersMock,
} from "../../mocks/charactersMock";
import { DbResponseStructure } from "../../types";
import {
  charactersReducer,
  loadCharactersActionCreator,
  loadMoreCharactersActionCreator,
} from "./charactersSlice";

describe("Given a loadCharacters reducer", () => {
  describe("When it receives an empty characters state and an action to load two characters", () => {
    test("Then it shoul return a list with two characters", () => {
      const currentCharactersState: DbResponseStructure = emptyMock;

      const expectedNewCharactersState: DbResponseStructure = {
        ...currentCharactersState,
        results: charactersMock.results,
        info: charactersMock.info,
      };

      const loadCharacters = loadCharactersActionCreator(charactersMock);

      const newState: DbResponseStructure = charactersReducer(
        currentCharactersState,
        loadCharacters
      );

      expect(expectedNewCharactersState).toStrictEqual(newState);
    });
  });
});

describe("Given a loadMoreCharacters reducer", () => {
  describe("When it receives a collection of characters and the action to load more characters", () => {
    test("Then it should return the current and the new collection of characters", () => {
      const currentCharactersState: DbResponseStructure = charactersMock;

      const expectedNewCharactersState: DbResponseStructure = {
        results: [
          ...currentCharactersState.results,
          ...loadMoreCharactersMock.results,
        ],
        info: loadMoreCharactersMock.info,
      };

      const loadMoreCharacters = loadMoreCharactersActionCreator(
        loadMoreCharactersMock
      );

      const newState: DbResponseStructure = charactersReducer(
        currentCharactersState,
        loadMoreCharacters
      );

      expect(expectedNewCharactersState).toStrictEqual(newState);
    });
  });
});
