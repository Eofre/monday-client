import { FC } from "react";
import classes from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export const Container: FC<ContainerProps> = ({ children, maxWidth }) => (
  <div style={{ maxWidth: maxWidth }} className={classes.container}>
    {children}
  </div>
);
