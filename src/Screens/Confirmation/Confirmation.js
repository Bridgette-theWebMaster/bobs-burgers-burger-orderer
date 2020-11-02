import React from "react";
//import Timer from "./Timer";

export default function Confirmation(props) {
  const min = 100000;
  const max = 999999;
  const rand = Math.floor(min + Math.random() * (max - min));
  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      <h2>Order Received!</h2>
      <p>Your order number {rand} is being made fresh!</p>
      <p>Order ready in:</p>
      <button type="button" onClick={props.showModal}>
        Ok
      </button>
    </div>
  );
}
