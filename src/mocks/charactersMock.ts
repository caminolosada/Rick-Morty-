import { CharacterStructure, DbResponseStructure } from "../types";

export const charactersMock: DbResponseStructure = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character?page=2",
    prev: "",
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

export const loadMoreCharactersMock: DbResponseStructure = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character?page=3",
    prev: "https://rickandmortyapi.com/api/character?page=1",
  },
  results: [
    {
      id: 21,
      name: "Aqua Morty",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/21",
      created: "2017-11-04T22:39:48.055Z",
    },
    {
      id: 22,
      name: "Aqua Rick",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
      episode: [],
      url: "https://rickandmortyapi.com/api/character/22",
      created: "2017-11-04T22:41:07.171Z",
    },
  ],
};

export const rareCharactersMock: DbResponseStructure = {
  info: {
    count: 826,
    pages: 42,
    next: "",
    prev: "",
  },
  results: [
    {
      id: 35432,
      name: "Rare Mock 1",
      status: "unknown",
      species: "unknown",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: "",
      },
      location: {
        name: "",
        url: "",
      },
      image: "",
      episode: [],
      url: "",
      created: "",
    },
    {
      id: 35433,
      name: "Rare Mock 2",
      status: "Dead",
      species: "unknown",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: "",
      },
      location: {
        name: "",
        url: "",
      },
      image: "",
      episode: [],
      url: "",
      created: "",
    },
  ],
};
