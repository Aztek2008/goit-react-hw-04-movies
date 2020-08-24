import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../assets/pop-art-2706464_640.jpg";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, match, location }) => (
  <li>
    <Link
      to={{
        pathname: `${match}/${movie.id}`,
        state: { from: location },
      }}
      className="MoviesGalleryItem"
    >
      <img
        src={movie.poster_path ? baseImgUrl + movie.poster_path : imagePath}
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

// MovieCard.defaultProps = { src: { imagePath } };

export default MovieCard;
