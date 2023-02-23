import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Link className={classes.logo} to="/">
      {`Monday`}
    </Link>
  );
};
