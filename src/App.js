import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={(input) =>
            this.setState({ searchText: input.target.value })
          }
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
