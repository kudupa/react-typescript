type InputProps = {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value, onChangeHandler }: InputProps) => {
  return <input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
