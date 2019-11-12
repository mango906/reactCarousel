import React from "react";
import { createGlobalStyle } from "styled-components";
import Carousel from "./containers/Carousel";

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        padding: 0;
        margin: 0;
        background-color: #282c34;
        align-items: center;
        justify-content: center;
    }
`;

const App = () => (
   <>
      <GlobalStyle />
      <Carousel />
   </>
);

export default App;
