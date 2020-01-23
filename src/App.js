import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = () => {
    console.log(this.text.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome msg={"Welcome to React"} />
          <input type="text" ref={input => (this.text = input)} />
          <button onClick={this.handleSubmit}>Show Value</button>
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
