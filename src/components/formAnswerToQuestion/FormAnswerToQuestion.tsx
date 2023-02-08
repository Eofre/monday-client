import React, { FC } from "react";
import { Word } from "../../types/types";
import SendButton from "../UI/buttonSend/SendButton";
import Input from "../UI/input/Input";
import styles from "./FormAnswerToQuestion.module.scss";

interface FormAnswerToQuestionProps {
  word: Word;
  answer: string;
  handlerChangeAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlerClickSendAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isShowAnswer: boolean;
  isRightAnswer: boolean;
  isWrongAnswer: boolean;
}

const FormAnswerToQuestion: FC<FormAnswerToQuestionProps> = ({
  word,
  answer,
  handlerChangeAnswer,
  handlerClickSendAnswer,
  isShowAnswer,
  isRightAnswer,
  isWrongAnswer,
}) => {
  return (
    <form className={styles.form}>
      {isShowAnswer && (
        <>
          <h2>Упс... Неверно!</h2>
          <p>
            Не расстрайвайся! Прочти несколько раз термин и запиши его еще раз в
            ответ
          </p>
          <p>Термин: {word.term}</p>
          <p>Транскрипция: {word.transcription}</p>
        </>
      )}
      <p>{word.definition}</p>
      <div className={styles.send}>
        {isRightAnswer ? (
          <Input
            style={{ border: "solid 1px green" }}
            value={answer}
            onChange={handlerChangeAnswer}
            type="text"
          />
        ) : isWrongAnswer ? (
          <Input
            style={{ border: "solid 1px red" }}
            value={answer}
            onChange={handlerChangeAnswer}
            type="text"
          />
        ) : (
          <Input value={answer} onChange={handlerChangeAnswer} type="text" />
        )}
        <SendButton onClick={handlerClickSendAnswer} />
      </div>
    </form>
  );
};

export default FormAnswerToQuestion;
