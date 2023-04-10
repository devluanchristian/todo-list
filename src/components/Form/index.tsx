import React from "react";
import { FormContainer } from "./styled";
import InputLabel from "../InputLabel";
import InputContainer from "../InputContainer";
import Button from "../Button";

const Form = () => {
  return (
    <FormContainer>
      <h1>TODOLIST</h1>
      <InputContainer>
        <div className="container-add">
          <InputLabel placeholder={"Nome da Tarefa"} type={"text"} />
          <Button />
        </div>
     
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
