import { useState } from "react";
import { FormContainer } from "./styled";
import InputLabel from "../InputLabel";
import InputContainer from "../InputContainer";
import Button from "../Button";
import { IItem } from "../../types/Item";
import ListItem from "../ListItem";
import { RiDeleteBin5Line } from 'react-icons/ri';


const Form = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<IItem[]>([
    {
      id: 1,
      name: "Comprar biscoito",
      done: false,
    },
    {
      id: 2,
      name: "Comprar Pão",
      done: true,
    },
  ]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(input);
  };

  const handleAddTask = () => {
    if (!input) return alert("Insira uma tarefa");
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: input,
      done: false,
    });
    setList(newList);
    setInput("");
  };
  const handleRemoveTask = (id: number) => {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
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
          <Button addTask={handleAddTask} />
        </div>
        <hr />

        <div className="container-list">
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
          RiDeleteBin5Line
        </div>
     
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
