import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import News from "./pages/News.js";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 100%;
  /* border: 1px solid grey; */
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: "Rubik", sans-serif;
}
a {
  text-decoration: none;
}
`;

const theme = {
  //Red
  lightRed: "#FEF2EF",
  midRed: "#FD0D67",
  darkRed: "#B81046",

  //Ocean Blue
  lightOcean: "#EFF3FF",
  midOcean: "#5110D5",
  darkOcean: "#33058F",

  //Ink
  lightInk: "#D8D5DA",
  midInk: "#6B646F",
  darkInk: "#231E25",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
