import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchText } = this.state;
    var findByName = (monster, searchText) => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase());
    };
    var findByEmail = (monster, searchText) => {
      return monster.email.toLowerCase().includes(searchText.toLowerCase());
    };
    function filterByNameOrEmail(monster) {
      if (findByName(monster, searchText) || findByEmail(monster, searchText))
        return true;
    }

    const filteredMonsters = monsters.filter(filterByNameOrEmail);

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(input) =>
            this.setState({ searchText: input.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
