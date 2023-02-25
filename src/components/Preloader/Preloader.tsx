import { FC } from "react";
import classes from "./Preloader.module.scss";

interface PreloaderProps {}

export const Preloader: FC<PreloaderProps> = () => (
  <div className={classes.preloader}>Загрузка...</div>
);
