import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
  grid-gap: 1rem;
`;

class MoviesList extends PureComponent {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b698d228ba0c27131c9c6ff708907bf9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;
