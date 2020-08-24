import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../assets/pop-art-2706464_640.jpg";

import s from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div>
      <p className={s.div}>404</p>
      <img src={imagePath} alt="404" />
      <p>
        Seems you've lost. You can go to home page <Link to="/">here</Link>{" "}
      </p>
    </div>
  );
}
