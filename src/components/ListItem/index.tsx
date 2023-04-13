import { useState } from "react";
import { IItem } from "../../types/Item";
import { ListItemStyled } from "./styled";
import { ImBin } from "react-icons/im";

interface IItemDTO {
  item: IItem;
  removeTask: () => void;
  updateTask: (updatedItem: IItem) => void;
}
const ListItem = ({ item, removeTask, updateTask }: IItemDTO) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheck = () => {
    const updatedItem = { ...item, done: !isChecked };
    updateTask(updatedItem);
    setIsChecked(!isChecked);
  };

  return (
    <ListItemStyled done={isChecked}>
      <div className="container-input-label">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <label>{item.name}</label>
      </div>
      <div className="btn-remove">
        <button onClick={removeTask}>
          <ImBin />
        </button>
      </div>
    </ListItemStyled>
  );
};

export default ListItem;


 