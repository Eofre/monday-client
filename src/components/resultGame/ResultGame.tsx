import { FC } from "react";
import styles from "./ResultGame.module.scss";
import { UserAnswer } from "../../types/types";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import IButton from "../UI/button/IButton";

interface ResultGameProps {
  userAnswers: UserAnswer[];
  score: number;
  handlerClickRestartGame: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlerClickExitGame: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ResultGame: FC<ResultGameProps> = ({
  userAnswers,
  score,
  handlerClickRestartGame,
  handlerClickExitGame,
}) => {
  return (
    <div className={styles.result}>
      <div className={styles.btns}>
        <IButton onClick={handlerClickRestartGame}>Начать заново</IButton>
        <IButton onClick={handlerClickExitGame}>Выход</IButton>
      </div>
      <h3 className={styles.title}>
        Поздравляю! Вы прошли тренировку! <BsFillEmojiSmileUpsideDownFill />
      </h3>
      <p className={styles.text}>Ваши баллы: {score}</p>
      <p className={styles.text}>
        Комментарий:
        {score === 100 ? (
          <span> Отлично! Так держать! Ты идеально знаешь данный модуль!</span>
        ) : score >= 75 ? (
          <span> Неплохо! </span>
        ) : score >= 60 ? (
          <span> Удовлетворительно!</span>
        ) : (
          <span> Неудовлетворительно</span>
        )}
      </p>
      <p>Ваши ответы:</p>
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
