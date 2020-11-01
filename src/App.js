import "./App.css";
import React from "react";
import Menu from "./Screens/Menu";
import { Burgers } from "./STORE";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
