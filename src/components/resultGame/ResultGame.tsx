import { FC } from "react";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { UserAnswer } from "../../types/types";
import IButton from "../UI/button/IButton";
import classes from "./ResultGame.module.scss";

interface ResultGameProps {
  userAnswers: UserAnswer[];
  score: number;
  handlerClickRestartGame: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlerClickExitGame: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ResultGame: FC<ResultGameProps> = ({
  userAnswers,
  score,
  handlerClickRestartGame,
  handlerClickExitGame,
}) => {
  return (
    <div className={classes.resultGame}>
      <div className={classes.btns}>
        <IButton onClick={handlerClickRestartGame}>Начать заново</IButton>
        <IButton onClick={handlerClickExitGame}>Выход</IButton>
      </div>
      <h3 className={classes.title}>
        Поздравляю! Вы прошли тренировку! <BsFillEmojiSmileUpsideDownFill />
      </h3>
      <p>Ваши баллы: {score}</p>
      <p>
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
      <ul className={classes.list}>
        {userAnswers.map((userAnswer) => (
          <li className={classes.item} key={userAnswer.word.term}>
            <p>Определение: {userAnswer.word.definition}</p>
            {userAnswer.isRight ? (
              <p className={classes.right}>Ваш ответ: {userAnswer.answer}</p>
            ) : (
              <p className={classes.wrong}>Ваш ответ: {userAnswer.answer}</p>
            )}
            <p>Термин: {userAnswer.word.term}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
