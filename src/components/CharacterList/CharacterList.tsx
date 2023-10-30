import { CharacterStructure } from "../../types";
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
          <h2 className="characters-list__card__name">{character.name}</h2>
        </li>
      ))}
    </CharacterListStyled>
  );
};

export default CharacterList;
