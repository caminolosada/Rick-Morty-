import { CharacterStructure } from "../../types";
import CharacterCardStyled from "./CharacterCardStyled";

interface CharacterCardProps {
  characterProps: CharacterStructure;
}

const CharacterCard = ({
  characterProps,
}: CharacterCardProps): React.ReactElement => {
  return (
    <CharacterCardStyled className="character">
      <img
        className="character-image"
        src={characterProps.image}
        alt={`${characterProps.name}`}
        width="150px"
        height="150px"
      />
      <div className="character-info">
        <h2 className="character-info__name">{characterProps.name}</h2>
        <span className="character-info__species">
          {characterProps.species}
        </span>
        <span className="character-info__ubication">
          You can find me in <strong>{characterProps.location}</strong>
        </span>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
