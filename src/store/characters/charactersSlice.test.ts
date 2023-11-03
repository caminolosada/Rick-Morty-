import { charactersMock } from "../../mocks/charactersMock";
import { CharacterStructure, DbResponseStructure } from "../../types";
import {
  charactersReducer,
  loadCharactersActionCreator,
} from "./charactersSlice";

describe("Given a loadCharacters reducer", () => {
  describe("When it receives an empty characters state and an action to load two characters", () => {
    test("Then it shoul return a list with two characters", () => {
      const currentEmptyState: CharacterStructure[] = [];

      const currentCharactersState: DbResponseStructure = {
        results: currentEmptyState,
        info: {
          count: 0,
          pages: 0,
          next: "",
          prev: "",
        },
      };

      const loadCharacters = loadCharactersActionCreator(charactersMock);

      const expectedNewCharactersState: DbResponseStructure = {
        ...currentCharactersState,
        results: charactersMock.results,
        info: charactersMock.info,
      };

      const newState: DbResponseStructure = charactersReducer(
        currentCharactersState,
        loadCharacters
      );

      expect(expectedNewCharactersState).toStrictEqual(newState);
    });
  });
});
