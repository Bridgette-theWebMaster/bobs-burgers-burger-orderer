import React from "react";
import OrderButton from "../../Components/Buttons/OrderButton";

export default function Cart(props) {
  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      <button onClick={props.showModal}>
        <strong>X</strong>
      </button>
      <h2>Your order</h2>
      <OrderButton clicked={props.showConfirm} />
    </div>
  );
}
