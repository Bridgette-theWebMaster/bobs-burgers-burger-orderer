import React from "react";
import Backdrop from "./Backdrop";
import "./Modal.css";

const modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.showModal} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
