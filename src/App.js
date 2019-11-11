import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #282c34;
    }
`;

const App = () => <GlobalStyle>123</GlobalStyle>;

export default App;
