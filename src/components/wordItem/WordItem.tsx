import React, { FC } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Word } from "../../types/types";
import styles from "./WordItem.module.scss";

interface WordItemProps {
  word: Word;
}

const WordItem: FC<WordItemProps> = ({ word }) => {
  return (
    <div className={styles.item}>
      <span className={styles.term}>
        <span>{word.term}</span>
        <span className={styles.transcription}>
          {word.transcription.trim() && <>{` |${word.transcription}|`}</>}
        </span>
      </span>
      <span className={styles.definition}>{word.definition}</span>
      <div className={styles.btns}>
        <button>
          <FaPencilAlt />
        </button>
      </div>
    </div>
  );
};

export default WordItem;
