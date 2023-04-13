import styled from "styled-components";

export const FooterStyled = styled.footer`
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
