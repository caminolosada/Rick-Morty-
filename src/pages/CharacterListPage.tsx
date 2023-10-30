import { charactersMocks } from "../mocks/charactersMock";
import { useAppDispatch } from "../store";
import { loadCharactersActionCreator } from "../store/characters/charactersSlice";
import CharacterListPageStyled from "./CharacterListPageStyled";

const CharacterListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadCharactersActionCreator(charactersMocks));
  return (
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
  );
};

export default CharacterListPage;
