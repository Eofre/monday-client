import { FC } from "react";
import IButton from "../UI/button/IButton";
import classes from "./FormStartGame.module.scss";

interface FormStartGameProps {
  handlerClickStart: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FormStartGame: FC<FormStartGameProps> = ({
  handlerClickStart,
}) => {
  return (
    <form className={classes.formStartGame}>
      <h3>Добро пожаловать в режим "Письмо на время"</h3>
      <p className={classes.description}>
        Режим служит для отточения терминов до автоматизма. На каждое слово вам
        будет данно несколько секунд.
      </p>
      <p className={classes.description}>
        Рекомандации: проговаривайте каждый термин вслух.
      </p>
      <IButton onClick={handlerClickStart}>Начать</IButton>
    </form>
  );
};
