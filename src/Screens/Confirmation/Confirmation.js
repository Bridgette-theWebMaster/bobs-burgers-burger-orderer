import React, { useEffect, useState } from "react";
import Timer from "../../Components/Timer/Timer";
import {Link} from 'react-router-dom'

export default function Confirmation() {
  const min = 100000;
  const max = 999999;
  const rand = Math.floor(min + Math.random() * (max - min));

  const [orderNum, setOrderNum] = useState(rand)
  console.log(orderNum)

 useEffect(() => {
   const order = localStorage.getItem('orderNum')
   setOrderNum(order)
 }, [])
  useEffect(() => {
    localStorage.setItem('orderNum', orderNum)
  }, [orderNum])
console.log(localStorage)

  return (
    <div className="Confirm">
      <h3>Order Received!</h3>
      <p>Your order number {orderNum} is being made fresh!</p>
      <p>Order ready in: <Timer /></p>
      <Link to='/menu'><button type="button" className='button success'>
        Ok
      </button></Link>
    </div>
  );
}
