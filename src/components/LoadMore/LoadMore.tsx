import Button from "../Button/Button";
import LoadMoreStyled from "./LoadMoreSyled";

const LoadMore = (): React.ReactElement => {
  return (
    <LoadMoreStyled>
      <Button classname="load_button" text="Load more" title="Load more" />;
    </LoadMoreStyled>
  );
};

export default LoadMore;
