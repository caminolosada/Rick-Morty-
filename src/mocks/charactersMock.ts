import { CharacterStructure, DbResponseStructure } from "../types";

export const charactersMock: DbResponseStructure = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character?page=2",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
  ],
};

export const emptyState: CharacterStructure[] = [];

export const emptyMock: DbResponseStructure = {
  results: emptyState,
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};
