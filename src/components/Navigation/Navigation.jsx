import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import s from "./Navigation.module.css";

const Navigation = () => (
  <ul className={s.NavigationMenu}>
    <li className={s.NavigationItem}>
      <NavLink
        exact
        to={routes.home}
        // to={"/"}
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li className={s.NavigationItem}>
      <NavLink
        to={routes.movies}
        // to={"/movies"}
        className={s.NavigationLink}
        activeClassName={s.NavigationLinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
