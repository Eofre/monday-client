import { FC, InputHTMLAttributes } from "react";
import classes from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...rest }) => {
  return <input className={classes.input} {...rest} />;
};
