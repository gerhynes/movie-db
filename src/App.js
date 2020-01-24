import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Jurassic Park"
  },
  {
    id: 2,
    title: "Star Wars: Rogue One"
  },
  {
    id: 3,
    title: "Wonder Woman"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{"< MOVIEDB >"}</h1>
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default App;
