import React, { ButtonHTMLAttributes, FC } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "./SendButton.module.scss";

interface SendButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SendButton: FC<SendButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      <RiSendPlaneFill />
    </button>
  );
};

export default SendButton;
