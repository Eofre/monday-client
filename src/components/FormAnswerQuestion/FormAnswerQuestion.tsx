import { FC } from "react";
import { Word } from "../../types/types";
import Input from "../UI/input/Input";
import { SendButton } from "../UI/SendButton";
import classes from "./FormAnswerQuestion.module.scss";

interface FormAnswerQuestionProps {
  word: Word;
  answer: string;
  handlerChangeAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlerClickSendAnswer: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isShowAnswer: boolean;
  outlineInput?: string;
}

export const FormAnswerQuestion: FC<FormAnswerQuestionProps> = ({
  word,
  answer,
  handlerChangeAnswer,
  handlerClickSendAnswer,
  isShowAnswer,
  outlineInput,
}) => {
  return (
    <form className={classes.formAnswerQuestion}>
      {isShowAnswer && (
        <>
          <h2>Упс... Неверно!</h2>
          <p>
            Не расстрайвайся! Прочти несколько раз термин и запиши его еще раз в
            ответ
          </p>
          <p>Термин: {word.term}</p>
          <p>Транскрипция: |{word.transcription}|</p>
        </>
      )}
      <p>{word.definition}</p>
      <div className={classes.send}>
        <Input
          style={{ outline: outlineInput }}
          value={answer}
          onChange={handlerChangeAnswer}
          type="text"
        />
        <SendButton onClick={handlerClickSendAnswer} />
      </div>
    </form>
  );
};
