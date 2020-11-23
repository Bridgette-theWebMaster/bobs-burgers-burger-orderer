import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UpdateAccount from "./UpdateAccount";
import Modal from "../../Modal/Modal";
import DeleteAccount from "../../Components/Buttons/DeleteAccount";
import { useHistory } from "react-router-dom";

const Account = (props) => {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [modalToggle, setModalToggle] = useState(false);

  async function getUser() {
    const url = `https://afternoon-wave-89398.herokuapp.com/dash/`;
    //`http://localhost:8000/dash/`
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const userName = await res.json();

      setUser(userName.name);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const modalHandler = (e) => {
    setModalToggle(!modalToggle);
  };

  //logging handler
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuth(false);
    toast.success("Logout Successful", { autoClose: 1000 });
  };

  return (
    <div>
      <Modal show={modalToggle} showModal={modalHandler}>
        <div style={{ color: "black" }}>
          <UpdateAccount onClick={modalHandler} />
        </div>
      </Modal>
      <button onClick={() => history.goBack()} className="button success">
        Back
      </button>
      <button onClick={(e) => logout(e)} className="button danger">
        Logout
      </button>
      <hr />
      <h1>Welcome back,</h1>
      <h2>{user}</h2>
      <p>Here you can modify your Bob's Burgers account.</p>
      <br />
      <button onClick={modalHandler} className="button success">
        Update Password
      </button>
      <DeleteAccount setAuth={props.setAuth} />
    </div>
  );
};
export default Account;
