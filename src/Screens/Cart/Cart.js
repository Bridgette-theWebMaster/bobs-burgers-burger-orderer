import React from "react";
import OrderButton from "../../Components/Buttons/OrderButton";
import './Cart.css'
import formatCurrency from '../../util'

export default function Cart(props) {
  const {order} = props
  return (
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      <button onClick={props.showModal} className='x-btn'>
        <strong>X</strong>
      </button>
      <div className='cart'>
        <h2>Your order</h2>
        <ul className='cart-items'>
          {order.map(i => (
            <li key={i.id}>
              <div>
                <img src={i.photo} alt={i.name} />
              </div>
              <div>
                <div>{i.name}</div>
                <div className='right'>
                  {i.price} x {i.count} {' '}
                  <button className='button' onClick={() => props.removeFromBag(i)}>
                    REMOVE
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {order.length !== 0 && (
        <div className='cart'>
          <div className='total'>
            <strong>Total: {formatCurrency(order.reduce((a, c) => a + (c.price*c.count), 0))}</strong>
          </div>
          <OrderButton clicked={props.showConfirm} />
        </div>
      )}
      
    </div>
  );
}
