import React, { Component } from "react";

import Loader from "../components/Loader/Loader";
import Search from "../components/Search/Search";
import Notification from "../components/Notification";
import MovieCard from "../components/MovieCard/MovieCard";
import ApiFetcher from "../services/ApiFetcher";
import getQueryParams from "../utils/getQueryStringParams";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    query && this.handleSearchFetcher(query);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    prevQuery !== nextQuery && this.handleSearchFetcher(nextQuery);
  }
  // =================================
  // ОБРАБОТЧИК ВВОДА В ПОЛЕ ЗАПРОСА
  // =================================
  handleSearchQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
    this.setState({
      page: 1,
      movies: [],
    });
  };

  // =================================
  // ОБРАБОТЧИК ЗАПРОСА ПО СЛОВУ
  // =================================
  handleSearchFetcher = (query) => {
    this.setState({ isLoading: true });
    
    const { page } = this.state;

    ApiFetcher.searchFetcher(query, page)
      .then((movies) =>
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...movies],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // ===============================
  // V V V - RENDER IS HERE - V V V
  // ===============================
  render() {
    const { movies, isLoading, error } = this.state;
    const { match, location } = this.props;

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
            <MovieCard
              key={movie.id}
              movie={movie}
              match={match.url}
              location={location}
            />
          ))}
        </ul>

        {isLoading && <Loader />}

        {movies.length > 0 && !isLoading && (
          <button
            className="showMoreBtnStyle"
            onClick={() => this.handleSearchFetcher}
          >
            <span className="buttonTitle">Show More</span>
          </button>
          // FIX BUTTON !!!!
        )}
      </div>
    );
  }
}
