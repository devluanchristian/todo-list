import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.colors.background};
    font-family: 'Poppins', sans-serif;
    font-size:14px;
    color: ${(props) => props.theme.colors.text};
}
.container-form{
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
