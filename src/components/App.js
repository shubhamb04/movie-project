import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Search from "./Search";

function App() {
  const [movie, setMovie] = useState([]);

  const getMovies = async (searchValue) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=91879c9c`
    );
    const data = await response.json();

    if (data.Search) {
      setMovie(data.Search);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="row d-flex align-items-center justify-content-around p-2">
        <Header text="Movie App" />
        <Search search={getMovies} />
      </div>
      <div className="container-fluid movie-app">
        <div className="row">
          <MovieList movies={movie} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
