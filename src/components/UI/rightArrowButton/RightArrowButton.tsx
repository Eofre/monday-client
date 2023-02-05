import React, { ButtonHTMLAttributes, FC } from "react";
import { BiRightArrow } from "react-icons/bi";
import styles from "./RightArrowButton.module.scss";

interface RightArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RightArrowButton: FC<RightArrowButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.btn}>
      <BiRightArrow />
    </button>
  );
};

export default RightArrowButton;
