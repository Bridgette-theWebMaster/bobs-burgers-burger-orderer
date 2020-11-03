import React from "react";
import STORE from "../../STORE";
import AddRemoveButton from "../Buttons/AddRemoveButton";

//button should be specific to the burger.
//so far when buttons are clicked, map is undefined
//count in both state and STORE json
//try Object.keys()

export default function Burger(props) {
  const burgers = STORE.Burgers;
  console.log(props);
  const burger = burgers.map((b) => {
    return (
      <ul key={b.id}>
        <li>
          <img src={b.photo} alt={b.name} />
        </li>
        <li>{b.name}</li>
        <li>{b.description}</li>
        <li>
          <strong>{b.price}</strong>
        </li>
        <li>
          <AddRemoveButton
            addClicked={props.add}
            removeClicked={props.remove}
            orderNum={props.order}
          />
        </li>
      </ul>
    );
  });

  return <div>{burger}</div>;
}
