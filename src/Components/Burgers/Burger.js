import React from "react";
import data from '../../data.json'

export default function Burger(props) {
  
  const burgers = data.Burgers
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
                <h3>${b.price}</h3>
              </div>
              <button onClick={() => props.addBurger(b)} className='button primary'>
                Add to Bag
              </button>
              
            </div>
          </li>
        ))}
      </ul>
    );
}
