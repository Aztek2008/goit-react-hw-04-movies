import React from "react";
import { Link } from "react-router-dom";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, match }) => (
  <li>
    <Link to={`${match}/${movie.id}`} className="MoviesGalleryItem">
      <img
        src="../assets/pusheen.jpg"
        // src={`${baseImgUrl}${movie.poster_path}`}
        alt={movie.original_title}
        width="150"
        className="MoviesGalleryItemImage"
      />
      <p className="MoviesGalleryTitle">{movie.original_title}</p>
      <div>Rating: {movie.vote_average}</div>
    </Link>
  </li>
);

export default MovieCard;
