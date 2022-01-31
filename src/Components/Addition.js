import React, { Component } from "react";
import Profile from "./Profile";
export default class Addition extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, sum: 0 };
  }
  textChange1 = (e) => {
    console.log(e.target.value);
    this.setState({ a: parseInt(e.target.value) });
  };
  textChange2 = (e) => {
    console.log(e.target.value);
    this.setState({ b: parseInt(e.target.value) });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.textChange1} />
        <br />
        <br />
        <input type="text" onChange={this.textChange2} />
        {console.log(this.state)}
        <div>Sum ={this.state.a + this.state.b}</div>
      </div>
    );
  }
}
