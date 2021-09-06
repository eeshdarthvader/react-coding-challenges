import React from "react";
import { createGlobalStyle } from "styled-components";
import { SignaturePage } from "./components/SignaturePage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <SignaturePage />
    </>
  );
};
