import { useEffect, useState } from "react";
import { FormContainer } from "./styled";
import InputLabel from "../InputLabel";
import InputContainer from "../InputContainer";
import Button from "../Button";
import { IItem } from "../../types/Item";
import ListItem from "../ListItem";
import { toast } from "react-toastify";

const Form = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<IItem[]>([]);

  useEffect(() => {
    const task = localStorage.getItem("list");
    if (task) {
      setList(JSON.parse(task));
    }
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  // Função de adicionar as tarefas
  const handleAddTask = () => {
    if (!input)
      return toast.error("Insira uma tarefa", {
        position: "bottom-right",
        autoClose: 2000,
      });
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: input,
      done: false,
    });
    setList(newList);
    toast("🚀 Tarefa criada", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.setItem("list", JSON.stringify(newList));
    setInput("");
  };

  // Função de remover a tarefa selecionada
  const handleRemoveTask = (id: number) => {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
    const dataList = JSON.parse(localStorage.getItem("list") || "[]");

    const indexListToRemove = dataList.findIndex(
      (list: { id: number }) => list.id === id
    );
    if (indexListToRemove !== "") {
      dataList.splice(indexListToRemove, 1);
    }
    localStorage.setItem("list", JSON.stringify(dataList));
    toast.success("Tarefa excluida", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Função para fazer a checagem se a tarefa foi concluida ou não
  const handleCheckTask = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setList(newList);

    //buscando a lista no localstore autalizada
    const dataList = JSON.parse(localStorage.getItem("list") || "[]");

    const indexListToUpdate = dataList.findIndex(
      (item: IItem) => item.id === id
    );
    if (indexListToUpdate !== "") {
      dataList[indexListToUpdate].done = !dataList[indexListToUpdate].done;
      localStorage.setItem("list", JSON.stringify(dataList));
    }
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
          {/* lógica condicional ternária para verificar se a lista possui algum item. 
            Se houver itens na lista, ele irá mapear cada item para um componente  */}
          {list.length ? (
            list.map((item, index) => (
              <ListItem
                updateTask={() => handleCheckTask(item.id)}
                key={item.id}
                item={item}
                removeTask={() => handleRemoveTask(item.id)}
              />
            ))
          ) : (
            <p>Nenhuma tarefa criada ...</p>
          )}
        </div>
      </InputContainer>
    </FormContainer>
  );
};

export default Form;
