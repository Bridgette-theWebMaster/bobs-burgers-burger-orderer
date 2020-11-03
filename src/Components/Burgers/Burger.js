import React from "react";

//button should be specific to the burger.
//so far when buttons are clicked, map is undefined
//count in both state and STORE json
//try Object.keys()

export default function Burger(props) {
  console.log(props)
    return (
      <ul className='burgers'>
        {props.burger.map(b => (
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