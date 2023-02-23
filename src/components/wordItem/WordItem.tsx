import { FC } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Word } from "../../types/types";
import classes from "./WordItem.module.scss";

interface WordItemProps {
  word: Word;
}

export const WordItem: FC<WordItemProps> = ({ word }) => {
  return (
    <div className={classes.wordItem}>
      <span className={classes.term}>
        <span>{word.term}</span>
        <span className={classes.transcription}>
          {word.transcription.trim() && <>{` |${word.transcription}|`}</>}
        </span>
      </span>
      <span className={classes.definition}>{word.definition}</span>
      <div className={classes.btns}>
        <button>
          <FaPencilAlt />
        </button>
      </div>
    </div>
  );
};
