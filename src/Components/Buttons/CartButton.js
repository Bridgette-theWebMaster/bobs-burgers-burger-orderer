import React from "react";

export default function CartButton(props) {
  console.log(props)
  return (
    <button 
      onClick={() => {
      props.clicked()
      /*props.onClick()*/
      }} 
      className= 'button'>
      Your
      <br /> Order
    </button>
  );
}
