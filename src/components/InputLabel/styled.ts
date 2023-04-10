import styled from "styled-components";

export const InputLabelStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  background-color: ${(props) => props.theme.colors.input};
  color: ${(props) => props.theme.colors.text};

  ::placeholder {
    padding-left: 3px;
  }
`;
