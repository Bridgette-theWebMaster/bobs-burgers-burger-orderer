import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export default function UpdateAccount(props) {
  const token = localStorage.getItem("token", localStorage.token);
  const id = jwt_decode(token).user;

  const [input, setInput] = useState({
    password: "",
  });
  const { password } = input;

  const url = "https://afternoon-wave-89398.herokuapp.com/dash/user";
  //http://localhost:8000/dash/user
  const onChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (input === "") {
      try {
        const body = { password };
        console.log(body);
        const response = await fetch(url + `/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token,
          },
          body: JSON.stringify(body),
        });
        const parseRes = await response.json();

        toast.success("Update Password Successful", { autoClose: 1000 });
      } catch (err) {
        console.error(err.message);
      }
    }
    toast.error("Password must contain characters", { autoClose: 1000 });
  };

  return (
    <div>
      <h3>Update Your Password</h3>
      <form onSubmit={onSubmitForm} className="update">
        <input
          type="password"
          name="password"
          value={password}
          placeholder="New Password"
          onChange={(e) => onChange(e)}
        />
        <br />
        <br />
        <button className="button success">Update</button>
      </form>
      <button onClick={props.onClick} className="button success">
        Close
      </button>
    </div>
  );
}
