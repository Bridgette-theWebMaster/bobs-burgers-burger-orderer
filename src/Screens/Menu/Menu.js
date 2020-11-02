import React from "react";
import AddRemoveButton from "../../Components/Buttons/AddRemoveButton";
import CartButton from "../../Components/Buttons/CartButton";
import STORE from "../../STORE";
import "./Menu.css";

export default function Menu(props) {
  const burger = STORE.Burgers;
  const burgers = burger.map((b) => {
    return (
      <ul key={b.id}>
        <li>
          <img src={b.photo} alt={b.name} />
        </li>
        <li className="Burger-name">{b.name}</li>
        <li className="Burger-descript">{b.description}</li>
        <li className="Burger-price">${b.price}</li>
        <AddRemoveButton />
      </ul>
    );
  });

  return (
    <div className="Menu-container">
      <CartButton className="Cart-button" clicked={props.showModal} />
      <img
        src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
        alt="logo"
        className="logo"
      />
      {burgers}
    </div>
  );
}
