import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";


export class App extends Component {
  state = {
    query: '',
  };

  updateQuery = text => {
    this.setState({ query: text });
  };

  render() {

    return (
      <div>
        <SearchBar onSubmit={this.updateQuery} />
      </div>
    );
  }
}
