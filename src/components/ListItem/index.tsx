import { useState } from "react";
import { IItem } from "../../types/Item";
import { ListItemStyled } from "./styled";



interface IItemDTO {
  item: IItem;
}
const ListItem = ({ item }: IItemDTO) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <ListItemStyled done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </ListItemStyled>
  );
};

export default ListItem;
