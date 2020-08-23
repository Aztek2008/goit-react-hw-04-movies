import React from "react";
import { Link } from "react-router-dom";

import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div>
      <p className={s.div}>404</p>
      <p>
        Seems you've lost. You can go to home page <Link to="/">here</Link>{" "}
      </p>
    </div>
  );
}
