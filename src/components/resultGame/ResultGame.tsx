import { FC } from "react";
import styles from "./ResultGame.module.scss";
import { UserAnswer } from "../../types/types";

interface ResultGameProps {
  userAnswers: UserAnswer[];
}

const ResultGame: FC<ResultGameProps> = ({ userAnswers }) => {
  return (
    <div className={styles.result}>
      <ul className={styles.list}>
        {userAnswers.map((userAnswer) => (
          <li className={styles.item} key={userAnswer.word.term}>
            <p>Определение: {userAnswer.word.definition}</p>
            {userAnswer.isRight ? (
              <p className={styles.right}>Ваш ответ: {userAnswer.answer}</p>
            ) : (
              <p className={styles.wrong}>Ваш ответ: {userAnswer.answer}</p>
            )}
            <p>Термин: {userAnswer.word.term}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultGame;
