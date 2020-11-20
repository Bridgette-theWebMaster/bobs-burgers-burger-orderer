import React, { useState } from "react";
import Burger from "../../Components/Burgers/Burger";
import CartButton from "../../Components/Buttons/CartButton";
import "./Menu.css";
import Modal from '../../Modal/Modal'
import Cart from '../Cart/Cart'
import { toast } from 'react-toastify'
import jwt_decode from 'jwt-decode'
import AccountButton from "../../Components/Buttons/AccountButton";
import { Link } from "react-router-dom";

export default function Menu({setAuth}) {
  const token = localStorage.getItem("token", localStorage.token)
  const [modalToggle, setModalToggle] = useState(false)
  const [order, setOrder ]= useState([])

  /*

  const [oid, setOid]= useState('')
  const [item, setItem] = useState([])


  const [orderTable, setOrderTable]= useState({
    uid: jwt_decode(token).user,
    order_date: new Date()
  })
  const {uid, order_date} = orderTable
  const url = "http://localhost:8000/dash"
  const onClick = async e => {
    //e.preventDefault();
    try {
      const body = { uid, order_date };
      const response = await fetch(
        url + "/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
        console.log(parseRes)
      // idea here is to take the id from Orders
      // plug it into oid for items table
      setOid(parseRes.id)
      }catch (err) {
        console.error(err.message);
      }
    };
*/


  //modal handler
  const modalHandler = (e) => {
    //e.preventDefault();    
      setModalToggle(!modalToggle)    
  };

// cart handler
  const addToBag = (b) => {    
    const orders = order.slice()
    let alreadyInBag = false
    orders.forEach((i) => {
      if(i.id === b.id){
        i.count ++
        alreadyInBag = true
        
      }
    })
    if(!alreadyInBag) {
     // setItem([...item, b])
      setOrder([...order, b])
    }; toast.success('Added to order')

  }
  const removeFromBag = (b) => {
    let hardCopy = [...order]
    hardCopy = hardCopy.filter(i => i.id !== b.id)
    toast.error('Removed from order')
    setOrder(hardCopy)
  }
  //console.log(item, "menu item")
  


  

  return (
    <div className="Menu-container">
      <Modal show={modalToggle} showModal={modalHandler}>
            <div style={{ color: "black" }}>
              <Cart
                order={order}
                removeFromBag={removeFromBag}
                //oid={oid}
                //item={item}
              />
            </div>
          </Modal>
          
      <CartButton clicked={modalHandler} /*onClick={onClick}*//>
      <Link to="./user">
        <AccountButton />
      </Link>
      <br />
      
      <Burger
        addBurger={addToBag}
      />
    </div>
  );
}
