import React, { Component } from "react";

import Person from "./Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Steph", age: "27" }
    ]
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Steph", age: "27" }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Steph", age: "27" }
      ]
    });
  };

  nameChangeHandler;
  render() {
    return (
      <div>
        <center>
          <button
            style={{ cursor: "pointer" }}
            onClick={this.switchNameHandler.bind(this, "Max by button")}
          >
            {" "}
            Switch Name{" "}
          </button>
        </center>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          change={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, "Maximilian")}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max by Manu")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={() => this.switchNameHandler("Max by Steph")}
        >
          {" "}
          My Hobbies are Playing games,cooking , reading, watching lot of TiVo
        </Person>
      </div>
    );
  }
}
export default App;
