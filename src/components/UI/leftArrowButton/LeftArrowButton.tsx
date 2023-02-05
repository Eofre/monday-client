import React, { ButtonHTMLAttributes, FC } from "react";
import { BiLeftArrow } from "react-icons/bi";
import styles from "./LeftArrowButton.module.scss";

interface LeftArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const LeftArrowButton: FC<LeftArrowButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.btn}>
      <BiLeftArrow />
    </button>
  );
};

export default LeftArrowButton;
