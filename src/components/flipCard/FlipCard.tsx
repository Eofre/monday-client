import React, { FC } from "react";
import styles from "./FlipCard.module.scss";
import { Word } from "../../types/types";
import ReactCardFlip from "react-card-flip";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import RightArrowButton from "../UI/rightArrowButton/RightArrowButton";
import LeftArrowButton from "../UI/leftArrowButton/LeftArrowButton";

interface FlipCardProps {
  word: Word;
  numberOfWords: number;
  isFlipped: boolean;
  isDisabledButtonPrevious: boolean;
  isDisabledButtonNext: boolean;
  cardNumber: number;
  nextCard: () => void;
  previousCard: () => void;
  flippedCard: () => void;
}

const FlipCard: FC<FlipCardProps> = ({
  word,
  numberOfWords,
  isDisabledButtonPrevious,
  isDisabledButtonNext,
  isFlipped,
  cardNumber,
  nextCard,
  previousCard,
  flippedCard,
}) => {
  const handlerClickNext = () => nextCard();
  const handlerClickPrevious = () => previousCard();
  const handlerClickFlipped = () => flippedCard();
  const isTranscription = word.transcription !== "";
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={styles.card} onClick={handlerClickFlipped}>
        <div className={styles.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={styles.word}>
          <div className={styles.term}>{word.term}</div>
          {isTranscription && (
            <span className={styles.transcription}>|{word.transcription}|</span>
          )}
        </div>
        <div className={styles.btns}>
          {isDisabledButtonPrevious ? (
            <LeftArrowButton disabled />
          ) : (
            <LeftArrowButton onClick={handlerClickPrevious} />
          )}
          {isDisabledButtonNext ? (
            <RightArrowButton disabled />
          ) : (
            <RightArrowButton onClick={handlerClickNext} />
          )}
        </div>
      </div>

      <div className={styles.card} onClick={handlerClickFlipped}>
        <div className={styles.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={styles.word}>{word.definition}</div>
        <div className={styles.btns}>
          {isDisabledButtonPrevious ? (
            <LeftArrowButton disabled />
          ) : (
            <LeftArrowButton onClick={handlerClickPrevious} />
          )}
          {isDisabledButtonNext ? (
            <RightArrowButton disabled />
          ) : (
            <RightArrowButton onClick={handlerClickNext} />
          )}
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
