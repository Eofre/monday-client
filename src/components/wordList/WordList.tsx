import React, { FC } from "react";
import { Word } from "../../types/types";
import WordItem from "../wordItem/WordItem";
import styles from "./WordList.module.scss";

interface WordItemProps {
  words: Word[];
}

const WordList: FC<WordItemProps> = ({ words }) => {
  return (
    <ul className={styles.list}>
      {words.map((word) => (
        <li key={word.term}>
          <WordItem word={word} />
        </li>
      ))}
    </ul>
  );
};

export default WordList;
