import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './Register.css'

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "https://afternoon-wave-89398.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      
      if(parseRes.jwtToken){
        localStorage.setItem("token", parseRes.jwtToken)

        setAuth(true)
        toast.success('Register Successful')
      } else {
        setAuth(false)
        toast.error(parseRes)
      }

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='Register'>
      <h1>Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => onChange(e)}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => onChange(e)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => onChange(e)}
        />
        
        <button>Register</button>
      </form>
      <Link to="/login">Already have an account? Login.</Link>
    </div>
  );
};

export default Register;
