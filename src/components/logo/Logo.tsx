import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link className={styles.logo} to="/">
      {`Monday`}
    </Link>
  );
};

export default Logo;
