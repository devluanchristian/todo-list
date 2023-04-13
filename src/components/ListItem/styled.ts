import styled from "styled-components";

interface IListItemProps {
  done: boolean;
}

export const ListItemStyled = styled.div<IListItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.input};
  padding: 10px;
  border-left: 4px solid ${(props) => props.theme.colors.button};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.done &&
    `
    filter: brightness(60%);
  `}
  .container-input-label {
    display: flex;
    align-items: center;
  }
  .container-input-label input {
    width: 25px;
    height: 15px;
    margin-right: 8px;
  }

  .container-input-label label {
    text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
  }
  .btn-remove button {
    border: none;
    background-color: transparent;
  }
  .btn-remove svg {
    cursor: pointer;
    font-size: 14px;
    color: ${props=> props.theme.colors.text}
  }
`;
