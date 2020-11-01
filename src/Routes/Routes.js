import React from "react";
import { Route } from "react-router-dom";
import Menu from "../Screens/Menu";

export default function Routes() {
  return (
    <div>
      {["/", "/menu"].map((path, i) => (
        <Route path={path} exact component={Menu} key={i} />
      ))}
    </div>
  );
}
