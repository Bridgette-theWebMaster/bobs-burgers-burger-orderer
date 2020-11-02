import React from "react";

export default function CartButton(props) {
  return (
    <button onClick={props.clicked}>
      Your
      <br /> Order
    </button>
  );
}
