
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "https://afternoon-wave-89398.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      //console.log(parseRes.jwtToken)
      if(parseRes.jwtToken){
        localStorage.setItem("token", parseRes.jwtToken)

        setAuth(true)
        toast.success('Login Successful')
      } 
        toast.error(parseRes)
      
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          placeholder="Password"
        />
        <button>Login</button>
      </form>
      <Link to="/register">Don't have an account? Register.</Link>
      <p>Email: Bob@bobsburgers.com
        <br />
        Password: Burgerz
      </p>
    </div>
  );
};

export default Login;
