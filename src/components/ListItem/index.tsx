import { useState } from "react";
import { IItem } from "../../types/Item";
import { ListItemStyled } from "./styled";
import { ImBin } from "react-icons/im";

interface IItemDTO {
  item: IItem;
  removeTask: () => void;
}
const ListItem = ({ item, removeTask}: IItemDTO) => {
  
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <ListItemStyled done={isChecked}>
      <div className="container-input-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>{item.name} - {item.done.toString()}</label>
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
