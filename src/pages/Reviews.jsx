import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";
import "../index.css";

export default class Cast extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  componentDidMount() {
    this.handleReviewFetcher();
    console.log("reviews in reviews page", this.state.reviews);
    console.log("this movieId", this.props.match.params.movieId);
  }

  // =================================
  // ОБРАБОТЧИК REVIEWS FETCH
  // =================================
  handleReviewFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieReviewFetcher(this.props.match.params.movieId)
      .then((reviews) =>
        this.setState({
          reviews: reviews.results,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews && (
          <ul className="CastGallery">
            {reviews.map((review) => (
              <li key={review.id}>
                <div className="CastItem">
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
