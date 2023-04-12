import { ButtonStyled } from "./styled";

interface IProps{
  addTask : () => void;
}


const Button = ({addTask}:IProps) => {
 
  return (
     <ButtonStyled onClick={addTask}>Adicionar</ButtonStyled>
  );
};

export default Button;
