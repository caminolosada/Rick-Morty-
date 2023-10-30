import { charactersMock } from "../../mocks/charactersMock";
import { CharacterState, CharacterStructure } from "../../types";
import {
  charactersReducer,
  loadCharactersActionCreator,
} from "./charactersSlice";

describe("Given a loadCharacters reducer", () => {
  describe("When it receives an empty characters state and an action to load two characters", () => {
    test("Then it shoul return a list with two characters", () => {
      const currentEmptyState: CharacterStructure[] = [];

      const currentCharactersState: CharacterState = {
        charactersData: currentEmptyState,
      };
      const loadCharacters = loadCharactersActionCreator(charactersMock);

      const expectedNewCharactersState: CharacterState = {
        ...currentCharactersState,
        charactersData: charactersMock,
      };

      const newState: CharacterState = charactersReducer(
        currentCharactersState,
        loadCharacters
      );

      expect(expectedNewCharactersState).toStrictEqual(newState);
    });
  });
});
