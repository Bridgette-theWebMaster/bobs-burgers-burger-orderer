import React from "react";
import AddRemoveButton from "../Components/Buttons/AddRemoveButton";
import STORE from "../STORE";

export default function Menu(props) {
  const burger = STORE.Burgers;
  const burgers = burger.map((b) => {
    return (
      <ul key={b.id}>
        <li>
          <img src={b.photo} alt={b.name} />
        </li>
        <li>{b.name}</li>
        <li>{b.description}</li>
        <li>${b.price}</li>
        <AddRemoveButton />
      </ul>
    );
  });

  return <div className="Menu-container">{burgers}</div>;
}
