import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>Name: {movie.title}</h2>
          <p>Times: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, genreIndex) => (
              <li key={genreIndex}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
