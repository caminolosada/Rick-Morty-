export interface CharacterStructure {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameUrlStructure;
  location: NameUrlStructure;
  episode: string[];
  url: string;
  created: string;
}

export interface DbResponseStructure {
  info: InfoStructure;
  results: CharacterStructure[];
}

export interface InfoStructure {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface NameUrlStructure {
  name: string;
  url: string;
}
