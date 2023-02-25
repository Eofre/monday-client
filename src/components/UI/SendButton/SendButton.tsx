import { ButtonHTMLAttributes, FC } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import classes from "./SendButton.module.scss";

interface SendButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SendButton: FC<SendButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={classes.sendButton}>
      <BsFillArrowRightSquareFill />
    </button>
  );
};
