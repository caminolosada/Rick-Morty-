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
    <>
      <CharacterListPageStyled>
        <h1 className="title">Characters</h1>
        <div className="decoration">
          <img
            src="/images/line.svg"
            alt="decorative separating line"
            width={135.61}
            height={0.5}
          />
        </div>
      </CharacterListPageStyled>
      <CharacterList characterProps={characters} />
    </>
  );
};

export default CharacterListPage;
