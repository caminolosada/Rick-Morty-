import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DbResponseStructure } from "../../types";

const initialCharactersState: DbResponseStructure = {
  results: [],
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialCharactersState,
  reducers: {
    loadCharacters: (
      _currentCharactersState,
      action: PayloadAction<DbResponseStructure>
    ): DbResponseStructure => action.payload,
  },
});

export const { loadCharacters: loadCharactersActionCreator } =
  charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
