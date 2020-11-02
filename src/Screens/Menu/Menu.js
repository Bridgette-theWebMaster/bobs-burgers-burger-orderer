import React from "react";
import AddRemoveButton from "../../Components/Buttons/AddRemoveButton";
import CartButton from "../../Components/Buttons/CartButton";
import STORE from "../../STORE";
import "./Menu.css";

//button should be specific to the burger.
//so far when buttons are clicked, map is undefined
//count in both state and STORE json
//try .filter()

export default class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      burgers: {
        burger: STORE.Burgers,
        count: 0,}
    }
    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
  }

  addToBag() {
    this.setState((state) => ({
      burgers: state.burgers.count + 1,
    }));
  }
  removeFromBag() {
    this.setState((state) => ({
      burgers: state.burgers.count > 0 ? state.burgers.count - 1 : state.burgers.count + 0,
    }));
  }
  
render(){ 
  const burger = this.state.burgers.burger
  console.log(burger)
  const burgers = burger.map((b) => {
    console.log(b.count)
    return (
      <ul key={b.id}>
        <li>
          <img src={b.photo} alt={b.name} />
        </li>
        <li className="Burger-name">{b.name}</li>
        <li className="Burger-descript">{b.description}</li>
        <li className="Burger-price">${b.price}</li>
        <AddRemoveButton
          addClicked={this.addToBag}
          removeClicked={this.removeFromBag}
          order={b.count}
          value={b.id} />
      </ul>
    );
  });
  return (
    <div className="Menu-container">
      <CartButton className="Cart-button" clicked={this.props.showModal} />
      <img
        src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
        alt="logo"
        className="logo"
      />
      {burgers}
    </div>
  );
}
}
