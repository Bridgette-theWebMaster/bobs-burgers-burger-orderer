import React, { useEffect, useState } from "react";

export default function Burger(props) {
  
  const [burgers, setBurgers] = useState([])

  const getBurgers = async e => {
    //e.preventDefault();
    const url = `https://afternoon-wave-89398.herokuapp.com/api/burgers`
//`http://localhost:8000/api/burgers`
    try {
      const res = await fetch(url)
      const burger = await res.json()
      setBurgers(burger)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getBurgers()

  }, [])
//console.log(burgers)
    return (
      <ul className='burgers'>
        {burgers.map(b => (
          <li key={b.id}>
            <div className='burger'>
              <img src={b.photo} alt={b.name} />
              <h2>{b.name}</h2>
              <p>{b.description}</p>
              <div className='burger-price'>
                <h3 className='price'>${b.price}</h3>
              </div>
              <button onClick={() => props.addBurger(b)} className='button'>
                Add to Bag
              </button>
              
            </div>
          </li>
        ))}
      </ul>
    );
}




