import Button from "../Button/Button";
import LoadMoreStyled from "./LoadMoreSyled";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore = ({ onClick }: LoadMoreProps): React.ReactElement => {
  return (
    <LoadMoreStyled>
      <Button
        classname="load_button"
        text="Load more"
        title="Load more"
        actionOnClick={onClick}
      />
      ;
    </LoadMoreStyled>
  );
};

export default LoadMore;
