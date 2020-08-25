export default {
  home: "/",
  movies: "/movies",
  movieDetails: "/movies/:movieId",
  movieCast: "/movies/:movieId/cast",
  movieReviews: "/movies/:movieId/reviews",
};

// export default [
//   {
//     path: "/",
//     label: "home",
//     exact: true,
//     component: lazy(() =>
//       import("./pages/HomePage" /* webpackChunkName: "home-page" */)
//     ),
//   },
//   {
//     path: "/movies",
//     label: "movies",
//     exact: true,
//     component: lazy(() =>
//       import("./pages/MoviesPage" /* webpackChunkName: "movies-page" */)
//     ),
//   },
//   {
//     path: "/movies/:movieId",
//     label: "movieDetails",
//     exact: true,
//     component: lazy(() =>
//       import(
//         "./pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
//       )
//     ),
//   },
//   {
//     path: "/movies/:movieId/cast",
//     label: "movieCast",
//     exact: true,
//     component: lazy(() =>
//       import("./pages/Cast" /* webpackChunkName: "cast-page" */)
//     ),
//   },
//   {
//     path: "/movies/:movieId/reviews",
//     label: "movieReviews",
//     exact: true,
//     component: lazy(() =>
//       import("./pages/Reviews" /* webpackChunkName: "reviews-page" */)
//     ),
//   },
// ];
