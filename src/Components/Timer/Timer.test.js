import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Timer />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
