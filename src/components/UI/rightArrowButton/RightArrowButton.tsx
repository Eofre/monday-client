import { ButtonHTMLAttributes, FC } from "react";
import { BiRightArrow } from "react-icons/bi";
import classes from "./RightArrowButton.module.scss";

interface RightArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const RightArrowButton: FC<RightArrowButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={classes.rightArrowButton}>
      <BiRightArrow />
    </button>
  );
};
