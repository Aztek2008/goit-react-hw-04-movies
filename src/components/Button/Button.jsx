import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className={s.SearchFormButton}>
      {children}
    </button>
  );
};

export default Button;
