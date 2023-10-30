import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterStructure } from "../../types";

export interface CharactersState {
  charactersData: CharacterStructure[];
}

const initialCharactersState: CharactersState = {
  charactersData: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      currentCharactersState,
      action: PayloadAction<CharacterStructure[]>
    ): CharactersState => ({
      ...currentCharactersState,
      charactersData: [...action.payload],
    }),
  },
});

export const { loadCharacters: loadCharactersActionCreator } =
  charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
