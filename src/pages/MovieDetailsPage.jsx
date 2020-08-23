import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";

import MovieReviewSection from "../components/MovieReviewSection/MovieReviewSection";

export default class MovieDetailsPage extends Component {
  state = {
    searchQuery: "",
    details: null,
    isLoading: false,
  };

  componentDidMount() {
    this.handleDetailsFetcher();
  }

  // ОБРАБОТЧИК ЗАПРОСА ДЕТАЛЕЙ ФИЛЬМА
  handleDetailsFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieDetailsFetcher(this.props.match.params.movieId)
      .then((details) =>
        this.setState({
          details,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { details } = this.state;

    return (
      <div>
        {details && <MovieReviewSection details={details} />}

        {/* <Link to={}>Cast</Link>
        <Link to={}>Reviews</Link> */}
        <hr />
      </div>
    );
  }
}

// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
