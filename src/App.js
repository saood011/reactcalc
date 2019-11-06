import React, { Component } from "react";
import "./App.css";
import "./input";
import Input from "./input";

export class App extends Component {
  state = {
    cal: [],
    result: ""
  };

  valueToCalculate = event => {
    this.state.cal.push(event.target.id);
    console.log(this.state);
    this.forceUpdate();
  };

  Calculate = () => {
    // eslint-disable-next-line
    const result = eval(this.state.cal.join(""));
    this.setState({ result: result });
  };
  clearInput = () => {
    this.setState({ cal: [] });
    this.setState({ result: "" });
  };
  delInput = () => {
    this.state.cal.pop();
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div className="container mt-3">
          <table className="table col-3 text-center border shadow">
            <tbody>
              <tr>
                <td colSpan="4">
                  <Input equation={this.state.cal} result={this.state.result} />
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="bg-info" onClick={this.clearInput}>
                  Clear
                </td>
                <td onClick={this.delInput}>DEL</td>
              </tr>
              <tr>
                <td id="1" onClick={this.valueToCalculate}>
                  1
                </td>
                <td id="2" onClick={this.valueToCalculate}>
                  2
                </td>
                <td id="3" onClick={this.valueToCalculate}>
                  3
                </td>
                <th
                  id="+"
                  className="bg-danger"
                  onClick={this.valueToCalculate}
                >
                  +
                </th>
              </tr>
              <tr>
                <td id="4" onClick={this.valueToCalculate}>
                  4
                </td>
                <td id="5" onClick={this.valueToCalculate}>
                  5
                </td>
                <td id="6" onClick={this.valueToCalculate}>
                  6
                </td>
                <th
                  id="-"
                  className="bg-danger"
                  onClick={this.valueToCalculate}
                >
                  -
                </th>
              </tr>
              <tr>
                <td id="7" onClick={this.valueToCalculate}>
                  7
                </td>
                <td id="8" onClick={this.valueToCalculate}>
                  8
                </td>
                <td id="9" onClick={this.valueToCalculate}>
                  9
                </td>
                <th
                  id="/"
                  className="bg-danger"
                  onClick={this.valueToCalculate}
                >
                  /
                </th>
              </tr>
              <tr>
                <td id="0" onClick={this.valueToCalculate}>
                  0
                </td>
                <td id="." onClick={this.valueToCalculate}>
                  .
                </td>
                <td className="bg-success" onClick={this.Calculate}>
                  =
                </td>
                <th
                  id="*"
                  className="bg-danger"
                  onClick={this.valueToCalculate}
                >
                  x
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
