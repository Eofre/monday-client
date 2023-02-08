import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./IButton.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IButton: FC<IButtonProps> = ({ ...rest }) => {
  return <button {...rest} className={styles.button}></button>;
};

export default IButton;
