import React, { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...rest }) => {
  return <input className={styles.input} {...rest} />;
};

export default Input;
