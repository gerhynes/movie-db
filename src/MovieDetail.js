import React, { Component } from "react";

const POSTER_PATH = `http://image.tmdb.org/t/p/w154`;
const BACKDROP_PATH = `http://image.tmdb.org/t/p/w1280`;

class MovieDetail extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=b698d228ba0c27131c9c6ff708907bf9&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie: movie
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h2>{movie.release_date}</h2>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
