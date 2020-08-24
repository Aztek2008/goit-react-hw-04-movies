import React from "react";
import Loaderer from "react-loader-spinner";
import styles from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <Loaderer
      className={styles.Loader}
      type="ThreeDots"
      color="#FF6347"
      height={80}
      width={80}
    />
  );
};

export default Loader;
