import React from "react";
import ReactDOM from "react-dom";
import Burger from "./Burger";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Burger />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
