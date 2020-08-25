import React, { Component } from "react";

import ApiFetcher from "../services/ApiFetcher";
import "../index.css";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

export default class Cast extends Component {
  state = {
    castInfo: [],
    isLoading: false,
  };

  componentDidMount() {
    this.handleCastFetcher();

    console.log("castInfo", this.state.castInfo);
    console.log("this movieId in match", this.props.match.params.movieId);
    console.log(
      "this movieId in history",
      this.props.history.location.pathname
    );
  }

  // =================================
  // ОБРАБОТЧИК CAST FETCH
  // =================================
  handleCastFetcher = () => {
    this.setState({ isLoading: true });

    ApiFetcher.movieCastFetcher(this.props.match.params.movieId)
      .then((castInfo) =>
        this.setState({
          castInfo: castInfo.cast,
        })
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { castInfo } = this.state;
    return (
      <div>
        {castInfo && (
          <ul className="CastGallery">
            {castInfo.map(
              (castItem) =>
                castItem.profile_path && (
                  <li key={castItem.cast_id}>
                    <div className="CastItem">
                      <img
                        src={baseImgUrl + castItem.profile_path}
                        alt="Actor's poster"
                        width="100"
                      />

                      <h4>{castItem.name}</h4>
                    </div>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    );
  }
}
