import { ButtonHTMLAttributes, FC } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

interface SendButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SendButton: FC<SendButtonProps> = ({ ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      <BsFillArrowRightSquareFill />
    </button>
  );
};

export default SendButton;
