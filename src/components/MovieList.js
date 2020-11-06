import React from "react";

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="d-flex justify-content-start m-2">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </>
  );
}

export default MovieList;
