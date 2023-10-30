export interface CharacterStructure {
  id: number;
  image: string;
  name: string;
  species: string;
  location: string;
  status: string;
}

export interface CharacterState {
  charactersData: CharacterStructure[];
}
