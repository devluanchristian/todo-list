import { InputLabelStyled } from "./styled";

interface IInputPros {
  placeholder: string;
  type: string;
}

const InputLabel = ({ placeholder, type }: IInputPros) => {
  return (
    <InputLabelStyled type={type} placeholder={placeholder}></InputLabelStyled>
  );
};

export default InputLabel;
