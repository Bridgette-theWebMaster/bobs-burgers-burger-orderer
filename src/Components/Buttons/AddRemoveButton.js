import React from "react";


//trun onClcik into a function, maybe?

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
  render() {*/
    return (
      <div>
        <button onClick={props.addClicked} id={props.value}> + </button>
        {props.order}
        <button onClick={props.removeClicked} id={props.value}> - </button>
      </div>
    );

}
