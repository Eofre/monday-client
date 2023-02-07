import React, { FC } from "react";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import styles from "./GameStatistics.module.scss";

interface GameStatisticsProps {
  numberCorrectAnswers: number;
  numberWrongAnswers: number;
  numberAnswers: number;
}

const GameStatistics: FC<GameStatisticsProps> = ({
  numberCorrectAnswers,
  numberWrongAnswers,
  numberAnswers,
}) => {
  return (
    <ul className={styles.list}>
      <li>
        <MdQuestionAnswer /> {numberAnswers}
      </li>
      <li className={styles.right}>
        <AiFillCheckSquare /> {numberCorrectAnswers}
      </li>
      <li className={styles.wrong}>
        <AiFillCloseSquare /> {numberWrongAnswers}
      </li>
    </ul>
  );
};

export default GameStatistics;
