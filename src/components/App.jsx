import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loader from "./Loader/Loader";
import NotFound from "./NotFound/NotFound";
import Layout from "./Layout/Layout";
import routes from "../routes";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
