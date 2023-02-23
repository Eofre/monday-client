import { FC, ButtonHTMLAttributes } from "react";
import classes from "./IButton.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const IButton: FC<IButtonProps> = ({ ...rest }) => {
  return <button {...rest} className={classes.iButton}></button>;
};
