interface ButtonProps {
  text: string;
  classname: string;
  actionOnClick?: () => void;
  title?: string;
}

const Button = ({
  text,
  classname,
  actionOnClick,
  title,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={classname} title={title} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
