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
    loadMoreCharacters: (
      currentCharactersState,
      action: PayloadAction<DbResponseStructure>
    ): DbResponseStructure => ({
      results: [...currentCharactersState.results, ...action.payload.results],
      info: action.payload.info,
    }),
  },
});

export const {
  loadCharacters: loadCharactersActionCreator,
  loadMoreCharacters: loadMoreCharactersActionCreator,
} = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
