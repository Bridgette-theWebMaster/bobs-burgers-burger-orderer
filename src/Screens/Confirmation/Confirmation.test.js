import React from "react";
import ReactDOM from "react-dom";
import Confirmation from "./Confirmation";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Confirmation />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
