import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Modal />
      <Backdrop />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
