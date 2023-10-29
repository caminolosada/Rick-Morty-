import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="/images/rick-morty-logo.svg"
        alt="rick and morty logo"
        width={262}
        height={63.84}
      />
    </HeaderStyled>
  );
};
export default Header;
