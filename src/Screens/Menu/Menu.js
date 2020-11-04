import React from "react";
import Burger from "../../Components/Burgers/Burger";
import CartButton from "../../Components/Buttons/CartButton";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div className="Menu-container">
      <CartButton className="Cart-button" clicked={props.showModal} />
      <br />
      {props.order.length}
      <Burger
        burger={props.burgers}
        addBurger={props.addToBag}
      />
    </div>
  );
}
