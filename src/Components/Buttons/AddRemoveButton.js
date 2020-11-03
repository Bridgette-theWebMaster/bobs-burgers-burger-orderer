import React from "react";

//refuses to update state of order
export default function AddRemoveButton(props) {
  /*  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
  }

  addToBag() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  removeFromBag() {
    this.setState((state) => ({
      count: state.count > 0 ? state.count - 1 : state.count + 0,
    }));
  }
  render() {
    */
  console.log(props);
  return (
    <div>
      <button onClick={props.addClicked} id={props.value}>
        {" "}
        +{" "}
      </button>
      {props.orderNum}
      <button onClick={props.removeClicked} id={props.value}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}
