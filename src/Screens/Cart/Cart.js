import React, { useState } from "react";
import OrderButton from "../../Components/Buttons/OrderButton";
import formatCurrency from '../../util'
import { Link } from "react-router-dom";
import uuid from 'react-uuid'
;


export default function Cart(props) {
 console.log(props, "thiis is props") 
  /*const token = localStorage.getItem("token", localStorage.token)

  const oid = props.oid
  const items = props.item
  const bid = items.map(i => (
    i.id
  ))
  const price = items.map(i => (
    i.price
  ))
  const quantity = items.map(i => (
    i.count
  ))
  console.log(bid, "item bid")
  console.log(price, "item price")
  console.log(quantity, "item count")
  console.log(oid, "oid")


  const url = "http://localhost:8000/api"

  const onClick = async e => {
    e.preventDefault();
    try{
//you are trying to send ITEMS to the Items table
//you have already gotten Item state to be placed with the proper metadata
//not the arrays must be parsed and inputted into Items table      
      const parseBid = bid.json()
      const parsePrice = price.json()
      const parseQuantity = quantity.json()
      const body = {parseBid, oid, parseQuantity, parsePrice}
      console.log(body)
      const responseItem =  fetch(
          url + "/items",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
          }
        )
        const parseItem =  responseItem.json()
        console.log(parseItem)
      } catch (err) {
        console.error(err.message);
      }
  };*/

  return (
  <div>
      <div className='cart'>
        <h2>Your order</h2>
        <ul className='cart-items'>
        {props.order.map(i => (
          <li key={uuid()}>
            <div>
              <img src={i.photo} alt={i.name} />
            </div>
            <div>
              <div>{i.name}</div>
            <div className='right'>
              {i.price} x {i.count} {'   '}
              <button className='button danger' onClick={() => props.removeFromBag(i)}>
                REMOVE
              </button>
            </div>
           </div>
          </li>
        ))}                
        </ul>
      </div>
      
        <div className='cart'>
          <div className='total'>
          <strong>Total: {formatCurrency(props.order.reduce((a, c) => a + (c.price*c.count), 0))}</strong>
          </div>
          {props.order.length !== 0 && (
            <Link to='/confirmation'>
            <OrderButton /*onClick={onClick}*//>
            </Link>
          )}
        </div>
      
      
    </div>
  );
}
