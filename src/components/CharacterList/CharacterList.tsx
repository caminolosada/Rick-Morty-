import { CharacterStructure } from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterListStyled from "./CharacterListStyled";

interface CharacterListProps {
  characterProps: CharacterStructure[];
}

const CharacterList = ({
  characterProps,
}: CharacterListProps): React.ReactElement => {
  return (
    <CharacterListStyled className="characters-list">
      {characterProps.map((character) => (
        <li className="characters-list__card" key={character.id}>
          <CharacterCard characterProps={character} />
        </li>
      ))}
    </CharacterListStyled>
  );
};

export default CharacterList;
