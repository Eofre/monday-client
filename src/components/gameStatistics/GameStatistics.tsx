import { FC } from "react";
import classes from "./GameStatistics.module.scss";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";

interface GameStatisticsProps {
  numberCorrectAnswers: number;
  numberWrongAnswers: number;
  numberAnswers: number;
}

export const GameStatistics: FC<GameStatisticsProps> = ({
  numberCorrectAnswers,
  numberWrongAnswers,
  numberAnswers,
}) => {
  return (
    <ul className={classes.gameStatistics}>
      <li>
        <MdQuestionAnswer /> {numberAnswers}
      </li>
      <li className={classes.right}>
        <AiFillCheckSquare /> {numberCorrectAnswers}
      </li>
      <li className={classes.wrong}>
        <AiFillCloseSquare /> {numberWrongAnswers}
      </li>
    </ul>
  );
};
