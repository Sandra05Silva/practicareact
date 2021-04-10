import KeyPad from "./components/KeyPad";
import React, { Component } from "react";
import Output from "./components/Output";
import "./App.css";

class App extends Component {
  state = {
    result: "",
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });
  };

  calculate = () => {
    this.setState({
      // eslint-disable-next-line no-eval
      result: eval(this.state.result)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.state.result} />
          <KeyPad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}
export default App;
