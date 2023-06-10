import { FC } from "react";
import classes from "./HeaderGame.module.scss";

interface HeaderGameProps {}

export const HeaderGame: FC<HeaderGameProps> = () => (
  <div className={classes.headerGame}></div>
);
