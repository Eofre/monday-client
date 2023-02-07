import React, { ButtonHTMLAttributes, FC } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import styles from "./SendButton.module.scss";

interface SendButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SendButton: FC<SendButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      <BsFillArrowRightSquareFill />
    </button>
  );
};

export default SendButton;
