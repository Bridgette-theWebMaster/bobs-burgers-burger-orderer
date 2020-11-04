import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register (props) {
 /* const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordMatch: '',
  })
  const handleChange = (e) => {
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(state.password === state.passwordMatch){
      sendDetailsToServer()
    }else{
      props.showError('Passwords do not match')
    }
  }
  onChange = {handleChange}
  onClick={handleSubmit}
  */
    return (
      <div className="Register">
        <h2>Register</h2>
        <form className="Register-form">
          <label>
            Name
            <br />
            <input 
              type="text" 
              id="name"
               />
          </label>
          <br />
          <label>
            Email
            <br />
            <input 
              type="text" 
              id="email"
               />
                        </label>
          <br />
          <label>
            Password
            <br />
            <input 
              type="password" 
              id="password"
               />
                        </label>
          <br />
          <label>
            Re-enter Password
            <br />
            <input 
              type="password" 
              id="passwordMatch"
               />
                        </label>
          <br />
          <Link to="/Login">
            <button 
              type="submit"
              >
                Register
            </button>
            <p>Already have an account?</p>
          </Link>
        </form>
      </div>
    );
  }

