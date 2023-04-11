import React, { useState } from "react";
import { FormContainer } from "./styled";
import InputLabel from "../InputLabel";
import InputContainer from "../InputContainer";
import Button from "../Button";
import Footer from "../Footer";

const Form = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>TODOLIST</h1>
      <InputContainer>
        <div className="container-add">
          <InputLabel
            placeholder={"Nome da Tarefa"}
            type={"text"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button />
        </div>
        <hr />
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
