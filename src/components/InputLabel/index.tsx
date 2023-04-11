import { InputLabelStyled } from "./styled";

interface IInputPros {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel = ({ placeholder, type, value, onChange }: IInputPros) => {
  return (
    <InputLabelStyled
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></InputLabelStyled>
  );
};

export default InputLabel;
