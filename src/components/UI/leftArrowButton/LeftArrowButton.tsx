import { ButtonHTMLAttributes, FC } from "react";
import { BiLeftArrow } from "react-icons/bi";
import classes from "./LeftArrowButton.module.scss";

interface LeftArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LeftArrowButton: FC<LeftArrowButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={classes.leftArrowButton}>
      <BiLeftArrow />
    </button>
  );
};
