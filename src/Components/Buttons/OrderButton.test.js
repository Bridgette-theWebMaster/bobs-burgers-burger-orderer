import React from "react";
import ReactDOM from "react-dom";
import OrderButton from "./OrderButton";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <OrderButton />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
