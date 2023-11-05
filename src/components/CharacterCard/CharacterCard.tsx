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
        <span
          className={
            characterProps.species !== "unknown"
              ? "character-info__species"
              : "isNotVisible"
          }
        >
          {characterProps.species}
        </span>
        <span
          className={
            characterProps.species === "unknown"
              ? "character-info__species"
              : "isNotVisible"
          }
        >
          Who knows?
        </span>
        <span
          className={
            characterProps.status === "Alive"
              ? "character-info__ubication"
              : "isNotVisible"
          }
        >
          You can find me in <strong>{characterProps.location.name}</strong>
        </span>
        <span
          className={
            characterProps.status === "Dead"
              ? "character-info__ubication"
              : "isNotVisible"
          }
        >
          You can not find me because I am{" "}
          <strong>{characterProps.status.toLowerCase()}</strong>
        </span>
        <span
          className={
            characterProps.status === "unknown"
              ? "character-info__ubication"
              : "isNotVisible"
          }
        >
          Sorry, mate, I can not give you more information about myself
        </span>
      </div>
    </CharacterCardStyled>
  );
};

export default CharacterCard;
