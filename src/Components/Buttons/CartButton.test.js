import React from "react";
import ReactDOM from "react-dom";
import CartButton from "./CartButton";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <CartButton />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
