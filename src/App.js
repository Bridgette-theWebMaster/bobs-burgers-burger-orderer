import "./App.css";
import React from "react";
import Menu from "./Screens/Menu/Menu";
import Modal from "./Modal/Modal";
import Cart from "./Screens/Cart/Cart";
import Confirmation from "./Screens/Confirmation/Confirmation";
import Login from "./Screens/Users/Login/Login";
import Register from "./Screens/Users/Register/Register";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalToggle: false,
      confirmation: false,
      cart: true,
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.confirmationHandler = this.confirmationHandler.bind(this);
  }

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle,
    });
  };

  confirmationHandler = (e) => {
    e.preventDefault();
    this.setState({
      confirmation: !this.state.confirmation,
      cart: !this.state.cart,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Modal show={this.state.modalToggle} showModal={this.modalHandler}>
            <div style={{ color: "black" }}>
              <Cart
                show={this.state.cart}
                showModal={this.modalHandler}
                showConfirm={this.confirmationHandler}
              />
              <Confirmation
                show={this.state.confirmation}
                showModal={this.modalHandler}
              />
            </div>
          </Modal>
          <Switch>
            {["/", "/menu"].map((path, i) => (
              <Route
                path={path}
                exact
                render={(props) => <Menu showModal={this.modalHandler} />}
                key={i}
              />
            ))}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
