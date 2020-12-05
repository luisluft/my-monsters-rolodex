import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "Hi, my name is Luis",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.text}</p>
          <button onClick={() => this.setState({ text: "Hello test" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
