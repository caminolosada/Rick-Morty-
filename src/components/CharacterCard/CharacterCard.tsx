import { CharacterStructure } from "../../types";

interface CharacterCardProps {
  characterProps: CharacterStructure;
}

const CharacterCard = ({
  characterProps,
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character">
      <img
        className="character__image"
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
          You can find me in {characterProps.location}
        </span>
      </div>
    </article>
  );
};

export default CharacterCard;
