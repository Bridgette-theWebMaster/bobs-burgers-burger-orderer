import React from "react";

export default class AddRemoveButton extends React.Component {
  constructor(props) {
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
    return (
      <div>
        <button onClick={this.addToBag}> + </button>
        {this.state.count}
        <button onClick={this.removeFromBag}> - </button>
      </div>
    );
  }
}
