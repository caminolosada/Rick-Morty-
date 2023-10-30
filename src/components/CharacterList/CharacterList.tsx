import { CharacterStructure } from "../../types";

interface CharacterListProps {
  characterProps: CharacterStructure[];
}

const CharacterList = ({
  characterProps,
}: CharacterListProps): React.ReactElement => {
  return (
    <ul className="characters-list">
      {characterProps.map((character) => (
        <li className="characters-list__card" key={character.id}>
          <h2 className="characters-list__card__name">{character.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
