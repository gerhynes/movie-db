import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    buttonIsShown: true
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome msg={"Welcome to React"} />
          {this.state.buttonIsShown && <p>This message should show and hide</p>}
          <button>Show / Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { msg } = this.props;
    return <h1 className="App-title">{this.props.msg}</h1>;
  }
}

export default App;
