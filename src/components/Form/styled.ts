import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 600px;
  border: 1px solid red;
  padding: 30px;

  h1 {
    font-weight: bold;
    padding-bottom: 30px;
  }
  span {
    border: 2px solid white;
  }
`;
