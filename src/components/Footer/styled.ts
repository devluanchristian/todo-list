import styled from "styled-components";

export const FooterStyled = styled.footer`
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;
