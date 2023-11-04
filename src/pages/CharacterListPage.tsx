import { useEffect } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import useCharacters from "../hooks/useCharacters/useCharacters";
import { useAppDispatch, useAppSelector } from "../store";
import { loadCharactersActionCreator } from "../store/characters/charactersSlice";
import CharacterListPageStyled from "./CharacterListPageStyled";

const CharacterListPage = (): React.ReactElement => {
  const characters = useAppSelector((state) => state.characters.results);
  const { getCharacters } = useCharacters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const characters = await getCharacters();

      dispatch(loadCharactersActionCreator(characters));
    })();
  }, [dispatch, getCharacters]);
  return (
    <CharacterListPageStyled>
      <div className="title">
        <h1 className="title__name">Characters</h1>
        <img
          className="title__decoration"
          src="/images/line.svg"
          alt="decorative separating line"
          width={135.61}
          height={0.5}
        />
      </div>
      <CharacterList characterProps={characters} />
    </CharacterListPageStyled>
  );
};

export default CharacterListPage;
