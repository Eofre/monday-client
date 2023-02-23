import { FC } from "react";
import { Word } from "../../types/types";
import { WordItem } from "../WordItem";
import classes from "./WordList.module.scss";

interface WordListProps {
  words: Word[];
}

export const WordList: FC<WordListProps> = ({ words }) => {
  return (
    <ul className={classes.wordList}>
      {words.map((word) => (
        <li key={word.term}>
          <WordItem word={word} />
        </li>
      ))}
    </ul>
  );
};
