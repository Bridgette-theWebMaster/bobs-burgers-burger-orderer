import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

//TODO: change button type to submit

export default class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form className="Login-form">
          <input type="text" name="username" placeholder="email" />
          <br />
          <input type="password" name="password" placeholder='password'/>
          <br />
          <Link to="/menu">
            <button type="button">Login</button>
          </Link>
        </form>
        <Link to="./Register">
          <p>Don't have an account?</p>
        </Link>
      </div>
    );
  }
}
