import React, { FC } from "react";
import IButton from "../UI/button/IButton";
import styles from "./StartGameForm.module.scss";

interface StartGameFormProps {
  handlerClickStart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StartGameForm: FC<StartGameFormProps> = ({ handlerClickStart }) => {
  return (
    <form className={styles.form}>
      <h3>Добро пожаловать в режим "Письмо на время"</h3>
      <p className={styles.description}>
        Режим служит для отточения терминов до автоматизма. На каждое слово вам
        будет данно несколько секунд.
      </p>
      <p className={styles.description}>
        Рекомандации: проговаривайте каждый термин вслух.
      </p>
      <IButton onClick={handlerClickStart}>Начать</IButton>
    </form>
  );
};

export default StartGameForm;
