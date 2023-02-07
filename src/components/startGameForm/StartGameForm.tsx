import React, { FC } from "react";
import styles from "./StartGameForm.module.scss";

interface StartGameFormProps {
  handlerClickStart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StartGameForm: FC<StartGameFormProps> = ({ handlerClickStart }) => {
  return (
    <form className={styles.form}>
      <h3>Добро пожаловать в режим "Письмо на время"</h3>
      <p>Описание:</p>
      <button onClick={handlerClickStart}>Начать</button>
    </form>
  );
};

export default StartGameForm;
