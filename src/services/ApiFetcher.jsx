const APY_KEY = "5b0542d93a87cb567a38c3a513c1819a";
const baseUrl = "https://api.themoviedb.org/3";

const defaultMoviesFetcher = () => {
  return fetch(
    `${baseUrl}/trending/movie/week?api_key=${APY_KEY}`
  ).then((response) => response.json());
};

const searchFetcher = (query, page = 1) => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${APY_KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
  )
    .then((response) => response.json())
    .then((parsedResponse) => parsedResponse.results);
};

const movieDetailsFetcher = (movieID) => {
  return fetch(
    `${baseUrl}/movie/${movieID}?api_key=${APY_KEY}&language=en-US`
  ).then((response) => response.json());
};

const movieCastFetcher = (movieID) => {
  return fetch(
    `${baseUrl}/movie/${movieID}/credits?api_key=${APY_KEY}&language=en-US`
  ).then((response) => response.json());
};

const movieReviewFetcher = (movieID) => {
  return fetch(
    `${baseUrl}/movie/${movieID}/reviews?api_key=${APY_KEY}&page=1`
  ).then((response) => response.json());
};

const movieVideoFetcher = (movieID) => {
  return fetch(
    `${baseUrl}/movie/${movieID}/reviews?api_key=${APY_KEY}&page=1`
  ).then((response) => response.json());
};

export default {
  defaultMoviesFetcher, // список самых популярных фильмов для homepage
  searchFetcher, // поиск кинофильма по ключевому слову
  movieDetailsFetcher, // запрос полной информации о фильме
  movieCastFetcher, // запрос информации о актёрском составе
  movieReviewFetcher, // запрос обзоров для страницы кинофильма
  movieVideoFetcher, // запрос на видеовоспроизведение
};
