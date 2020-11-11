import React from "react";
import Timer from "../../Components/Timer/Timer";
import {Link} from 'react-router-dom'

export default function Confirmation() {
  const min = 100000;
  const max = 999999;
  const rand = Math.floor(min + Math.random() * (max - min));

  return (
    <div>
      <strong>Order Received!</strong>
      <p>Your order number {rand} is being made fresh!</p>
      <p>Order ready in: <Timer /></p>
      <Link to='/menu'><button type="button">
        Ok
      </button></Link>
    </div>
  );
}
