import SearchStyled from "./SearchStyled";

const Search = (): React.ReactElement => {
  return (
    <SearchStyled className="search">
      <label className="search__label" htmlFor="search" aria-label="search">
        <input
          className="search__input"
          id="search"
          type="text"
          placeholder="Type to find a character"
          autoComplete="off"
        />
      </label>
    </SearchStyled>
  );
};

export default Search;
