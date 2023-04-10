import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  height: 30px;
  width: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.button};
  color: white;
  cursor: pointer;
`;
