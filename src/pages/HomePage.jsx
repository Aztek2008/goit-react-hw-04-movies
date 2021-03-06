import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";
import Loader from "../components/Loader/Loader";
import Notification from "../components/Notification";
import MovieCard from "../components/MovieCard/MovieCard";
import "../index.css";

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.handleApiFetcher();
  }

  // ===========================================================
  // ЗАПРОС ПОПУЛЯРНЫХ ФИЛЬМОВ ДЛЯ ВЫВОДА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
  // ===========================================================

  handleApiFetcher = (query) => {
    ApiFetcher.defaultMoviesFetcher()
      .then((response) =>
        this.setState({
          movies: response.results,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading, error } = this.state;

    return (
      <div>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        <ul className="MoviesGallery">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} match={"/movies"} />
          ))}
        </ul>

        {isLoading && <Loader />}
      </div>
    );
  }
}
