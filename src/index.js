import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Screens/Menu/Menu";

ReactDOM.render(
  <BrowserRouter>
    <Menu />
  </BrowserRouter>,
  document.getElementById("root")
);
