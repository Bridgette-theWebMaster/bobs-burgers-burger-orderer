import React, { useEffect, useState } from "react";
import Burger from "../../Components/Burgers/Burger";
import CartButton from "../../Components/Buttons/CartButton";
import "./Menu.css";
import Modal from '../../Modal/Modal'
import Cart from '../Cart/Cart'
import Confirmation from '../Confirmation/Confirmation'
import { toast } from 'react-toastify'

export default function Menu({setAuth}) {
  const [modalToggle, setModalToggle] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
  const [cart, setCart] = useState(true)
  const [order, setOrder ]= useState([])


  //modal handler
  const modalHandler = (e) => {
    e.preventDefault();    
      setModalToggle(!modalToggle)    
  };

  const removeModal = (e) => {
    e.preventDefault()
    setConfirmModal(!confirmModal)
  }

  const confirmationHandler = (e) => {
    e.preventDefault();
    setModalToggle(!modalToggle)
    setConfirmModal(!confirmModal)
    setConfirmation(!confirmation)
    setCart(!cart)
  };


// Cart Handler
  const addToBag = (b) => {
   
    const orders = order.slice()
    console.log(orders)
    let alreadyInBag = false
    orders.forEach((i) => {
      if(i.id === b.id){
        i.count ++  
        //order.push({...b, count: 1})      
        alreadyInBag = true
      }
    })
    if(!alreadyInBag) {
      orders.push({...b, count: 1})
    }
    toast.success('Added to order')
    setOrder([...order, b]);
    
  }
console.log(order)

// TODO: add a uuid so that multiples of same don't delete all
  const removeFromBag = (b) => {
    let hardCopy = [...order]
    hardCopy = hardCopy.filter(i => i.id !== b.id)
    toast.error('Removed from order')
    setOrder(hardCopy)
  }

  const [total, setTotal] = useState(0)

    useEffect(() => {
      totalValue()
    }, [order])
    
    const totalValue = () => {
      let totalVal = 0;
      for (let i = 0; i < order.length; i++){
        totalVal += order[i].price
      }
      setTotal(totalVal)
    }
console.log(total)


  //logging handler
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
    toast.success("Logout Successful")
  }

  return (
    <div className="Menu-container">
      <Modal show={modalToggle} showModal={modalHandler}>
            <div style={{ color: "black" }}>
              <Cart
                show={cart}
                showModal={modalHandler}
                showConfirm={confirmationHandler}
                order={order}
                removeFromBag={removeFromBag}
                total={total}
              />
            </div>
          </Modal>
          <button onClick={e => logout(e)}>Logout</button>
      <CartButton className="Cart-button" clicked={modalHandler} />
      <br />
      
      <Burger
        addBurger={addToBag}
      />
    </div>
  );
}
