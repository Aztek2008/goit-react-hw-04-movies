import React from "react";
import s from "./MovieReviewSection.module.css";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieReviewSection = ({ details }) => (
  <div className={s.detailsArticle}>
    <img src={`${baseImgUrl}${details.poster_path}`} alt="Movie poster" />
    <div className={s.reviewArticle}>
      <h1>{details.original_title}</h1>
      <p>
        <b>User rating: </b> {details.vote_average} / {details.vote_count} votes
      </p>
      <p className={s.reviewText}>{details.overview}</p>
      {details.genres && (
        <p>
          <b>Genres: </b>{" "}
          {details.genres.map((country) => country.name).join(", ")}
        </p>
      )}
      <p>
        <b>Release date: </b> {details.release_date}
      </p>
      {details.production_countries && (
        <p>
          <b>Production countries: </b>

          {details.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
      )}
      <hr />
      {/* <p>Additional information:</p> */}
    </div>
    <br />
  </div>
);

export default MovieReviewSection;
