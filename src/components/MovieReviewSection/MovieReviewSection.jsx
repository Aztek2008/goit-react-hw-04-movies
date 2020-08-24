import React from "react";
import s from "./MovieReviewSection.module.css";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieReviewSection = ({ details, onClick }) => (
  <div className={s.detailsArticle}>
    <button className={s.gotoMoviesBtn} onClick={onClick} type="button">
      Goto Movies
    </button>
    <img src={`${baseImgUrl}${details.poster_path}`} alt="Movie poster" />
    <div className={s.reviewArticle}>
      <h1>{details.original_title}</h1>
      <p className={s.tagline}>{details.tagline}</p>

      {/* USER RATING */}
      <p>
        <b>User rating: </b> {details.vote_average} / {details.vote_count} votes
      </p>

      {/* MOVIE DESCRIPTION */}
      <p className={s.reviewText}>{details.overview}</p>

      {/* MOVIE GENRES */}
      {details.genres && (
        <p>
          <b>Genres: </b> {details.genres.map((genre) => genre.name).join(", ")}
        </p>
      )}

      {/* RELEASE DATE */}
      <p>
        <b>Release date: </b> {details.release_date}
      </p>

      {/* PRODUCTION COUNTRIES */}
      {details.production_countries && (
        <p>
          <b>Production countries: </b>

          {details.production_countries
            .map((country) => country.name)
            .join(", ")}
        </p>
      )}
    </div>
    <br />
  </div>
);

export default MovieReviewSection;
