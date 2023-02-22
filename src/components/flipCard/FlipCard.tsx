import { FC } from "react";
import classes from "./FlipCard.module.scss";
import { Word } from "../../types/types";
import RightArrowButton from "../UI/rightArrowButton/RightArrowButton";
import LeftArrowButton from "../UI/leftArrowButton/LeftArrowButton";
import ReactCardFlip from "react-card-flip";

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

export const FlipCard: FC<FlipCardProps> = ({
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
      <div className={classes.card} onClick={handlerClickFlipped}>
        <div className={classes.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={classes.word}>
          <div className={classes.term}>{word.term}</div>
          {isTranscription && (
            <span className={classes.transcription}>
              |{word.transcription}|
            </span>
          )}
        </div>
        <div className={classes.btns}>
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

      <div className={classes.card} onClick={handlerClickFlipped}>
        <div className={classes.top}>
          {cardNumber} / {numberOfWords}
        </div>
        <div className={classes.word}>{word.definition}</div>
        <div className={classes.btns}>
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
