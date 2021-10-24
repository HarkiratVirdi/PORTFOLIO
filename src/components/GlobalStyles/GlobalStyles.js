import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


body{
    overflow-x:hidden;
    background: ${(props) => props.theme.ui}
    transition: all 0.5s;
}
`;

export default GlobalStyle;
