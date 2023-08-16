type ButtonProps = {
  onClickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};
const Button = ({ onClickHandler }: ButtonProps) => {
  return <button onClick={(event) => onClickHandler(event, 1)}>Click</button>;
};

export default Button;
