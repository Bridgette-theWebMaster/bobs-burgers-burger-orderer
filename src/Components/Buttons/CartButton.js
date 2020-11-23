import React from "react";

export default function CartButton(props) {
  return (
    <button
      onClick={() => {
        props.clicked();
        /*props.onClick()*/
      }}
      className="button success"
    >
      Your Order
    </button>
  );
}
