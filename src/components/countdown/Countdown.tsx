import { Dispatch, FC, SetStateAction, useEffect } from "react";
import classes from "./Countdown.module.scss";

interface CountdownProps {
  seconds: number;
  isCounting: boolean;
  setIsCounting: Dispatch<SetStateAction<boolean>>;
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const Countdown: FC<CountdownProps> = ({
  seconds,
  isCounting,
  setIsCounting,
  setSeconds,
}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      isCounting && setSeconds(seconds - 1);
    }, 1000);
    if (seconds === 0) setIsCounting(false);

    return () => clearInterval(timer);
  }, [isCounting, seconds, setIsCounting, setSeconds]);

  return <div className={classes.countdown}>{seconds}</div>;
};
