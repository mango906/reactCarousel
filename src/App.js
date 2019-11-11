import React from "react";
import { createGlobalStyle } from "styled-components";
import Carousel from "./containers/Carousel";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: #282c34;
    }
`;

const App = () => (
   <>
      <GlobalStyle />
      <Carousel />
   </>
);

export default App;
