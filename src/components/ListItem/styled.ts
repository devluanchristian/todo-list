import styled from "styled-components";

interface IListItemProps {
  done: boolean;
}

export const ListItemStyled = styled.div<IListItemProps>`
  display: flex;
  background-color: ${(props) => props.theme.colors.input};
  padding: 10px;
  border-left: 4px solid ${(props) => props.theme.colors.button};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  ${(props) =>
    props.done &&
    `
    filter: brightness(60%);
  `}

  input {
    width: 25px;
    height: 15px;
    margin-right: 8px;
  }

  label {
    text-decoration: ${(props) => (props.done ? "line-through" : "initial")};
  }
`;
