import "./App.css";
import React from "react";
import Menu from "./Screens/Menu/Menu";
import Modal from "./Modal/Modal";
import Cart from "./Screens/Cart/Cart";
import Confirmation from "./Screens/Confirmation/Confirmation";
import Login from "./Screens/Users/Login/Login";
import Register from "./Screens/Users/Register/Register";
import { Route, Switch } from "react-router-dom";
import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgers: data.Burgers,
      modalToggle: false,
      confirmModal: false,
      confirmation: false,
      cart: true,
      order: [],
    };
    this.modalHandler = this.modalHandler.bind(this);
    this.confirmationHandler = this.confirmationHandler.bind(this);
    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
  }

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle,
    });
  };

  removeModal = (e) => {
    e.preventDefault()
    this.setState({
      confirmModal: !this.state.confirmModal,
      confirmation: !this.state.confirmation
    })
  }

  confirmationHandler = (e) => {
    e.preventDefault();
    this.setState({
      modalToggle: !this.state.modalToggle,
      confirmModal: !this.state.confirmModal,
      confirmation: !this.state.confirmation,
      cart: !this.state.cart,
    });
  };

  addToBag = (b) => {
    const order = this.state.order.slice()
    let alreadyInBag = false
    order.forEach((item) => {
      if(item.id === b.id){
        item.count++
        alreadyInBag = true
      }
    })
    if(!alreadyInBag) {
      order.push({...b, count: 1})
    }
    this.setState({order});
  }

  removeFromBag = (b) => {
    const order = this.state.order.slice()
    this.setState({
      order: order.filter(x => x.id !== b.id)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img
        src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
        alt="logo"
        className="logo"
      />
        </header>
        <main classNAme='App-main'>
          <Modal show={this.state.modalToggle} showModal={this.modalHandler}>
            <div style={{ color: "black" }}>
              <Cart
                show={this.state.cart}
                showModal={this.modalHandler}
                showConfirm={this.confirmationHandler}
                order={this.state.order}
                removeFromBag={this.removeFromBag}
              />
            </div>
          </Modal>
          <Modal 
            show={this.state.confirmation} 
            showModal={this.modalHandler}
          >
            <div style={{ color: "black" }}>
              <Confirmation
                show={this.state.confirmation}
                showModal={this.removeModal}
              />
            </div>
          </Modal>
          <Switch>
            {["/", "/login"].map((path, i) => (
              <Route path={path} exact component={Login} key={i} />
            ))}
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  burgers={this.state.burgers}
                  showModal={this.modalHandler}
                  addToBag={this.addToBag}
                  order={this.state.order}
                />
              )}
            />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
