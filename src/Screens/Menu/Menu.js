import React from "react";
import Burger from "../../Components/Burgers/Burger";
import CartButton from "../../Components/Buttons/CartButton";
import "./Menu.css";

export default function Menu(props) {
  console.log(props);
  return (
    <div className="Menu-container">
      <CartButton className="Cart-button" clicked={props.showModal} />
      <img
        src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
        alt="logo"
        className="logo"
      />
      <Burger
        add={props.addBurger}
        remove={props.removeBurger}
        order={props.countBurger}
      />
    </div>
  );
}
