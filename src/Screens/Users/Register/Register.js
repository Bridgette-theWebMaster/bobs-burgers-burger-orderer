import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default class Register extends React.Component {
  render() {
    return (
      <div className="Register">
        <img
          src="https://i.cdn.tbs.com/assets/images/2017/03/BobsBurgers-Logo-900x360.png"
          alt="logo"
          className="logo"
        />
        <h2>Register</h2>
        <form className="Register-form">
          <label>
            Name
            <br />
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email
            <br />
            <input type="text" name="email" />
          </label>
          <br />
          <label>
            Password
            <br />
            <input type="password" name="password" />
          </label>
          <br />
          <label>
            Re-enter Password
            <br />
            <input type="password" name="passwordMatch" />
          </label>
          <br />
          <Link to="/Login">
            <button type="submit">Register</button>
            <p>Already have an account?</p>
          </Link>
        </form>
      </div>
    );
  }
}
