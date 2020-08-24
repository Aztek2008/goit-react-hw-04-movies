import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import Loader from "./Loader/Loader";
import NotFound from "./NotFound/NotFound";
import Layout from "./Layout/Layout";
import routes from "../routes";

const App = () => (
  <BrowserRouter>
    <Layout>
      {/* <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense> */}
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
