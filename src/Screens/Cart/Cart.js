import React from "react";
import OrderButton from "../../Components/Buttons/OrderButton";
import './Cart.css'
import formatCurrency from '../../util'
import { Link } from "react-router-dom";

export default function Cart(props) {
  

  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      <div className='cart'>
        <h2>Your order</h2>
        <ul className='cart-items'>
        {props.order.map(i => (
          <li key={i.id}>
            <div>
              <img src={i.photo} alt={i.name} />
            </div>
            <div>
              <div>{i.name}</div>
            <div className='right'>
              {i.price} {'   '}
              <button className='button' onClick={() => props.removeFromBag(i)}>
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
          <strong>Total: {formatCurrency(props.total)}</strong>
          </div>
          {props.order.length !== 0 && (
            <Link to='/confirmation'><OrderButton /></Link>
          )}
        </div>
      
      
    </div>
  );
}
