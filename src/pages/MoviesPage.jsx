import React, { Component } from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import Button from "../components/Button/Button";
import Notification from "../components/Notification";
import ApiFetcher from "../services/ApiFetcher";
import MovieCard from "../components/MovieCard/MovieCard";
// import getQueryParams from "../utils/getQueryStringParams";
// import routes from "../routes";

export default class MoviesPage extends Component {
  static defaultProps = {
    src: "../assets/pusheen.jpg",
  }; // NOT WORKING

  state = {
    movies: [],
    searchQuery: "",
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    prevQuery !== nextQuery && this.handleSearchFetcher();
  }

  // ОБРАБОТЧИК ВВОДА В ПОЛЕ ЗАПРОСА
  handleSearchQuery = (query) => {
    this.setState({ movies: [], searchQuery: query, page: 1 });
  };

  // ОБРАБОТЧИК ЗАПРОСА ПО СЛОВУ
  handleSearchFetcher = () => {
    const { searchQuery, page } = this.state;

    ApiFetcher.searchFetcher(searchQuery, page)
      .then((movies) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...movies],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const { match } = this.props;

    return (
      <div>
        <Search onSubmit={this.handleSearchQuery} />

        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        <ul className="MoviesGallery">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} match={match.url} />
          ))}
        </ul>

        {isLoading && <Loader />}

        {movies.length > 0 && !isLoading && (
          <Button onClick={this.handleSearchFetcher}>
            <span className="buttonTitle">Show More</span>
          </Button>
        )}
      </div>
    );
  }
}
