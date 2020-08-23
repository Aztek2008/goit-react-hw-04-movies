import React from "react";

import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => (
  <div className={s.Header}>
    <Navigation />
  </div>
);

export default Header;
