import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="bg-dark text-white shadow input">
        {this.props.equation.join("")} <br />
        {this.props.result}
      </div>
    );
  }
}

export default Input;
