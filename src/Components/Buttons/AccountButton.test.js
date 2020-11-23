import React from "react";
import ReactDOM from "react-dom";
import AccountButton from "./AccountButton";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <AccountButton />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
