import React, { Component } from "react";

export default class ClassComb extends Component {
  render() {
      var sum = this.props.num1 + this.props.num2
    return (
        <div>
            <h3>number 1 is : </h3>
            <p>{this.props.num1}</p>
            <h3>number 2 is : </h3>
            <p>{this.props.num2}</p>
            <h3>sum is : </h3>
            <p>{sum}</p>
        </div>
    );
  }
}
