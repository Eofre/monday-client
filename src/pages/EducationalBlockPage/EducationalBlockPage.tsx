import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { FlipCard } from "../../components/FlipCard";
import { IButton } from "../../components/UI/IButton";
import { WordList } from "../../components/WordList";
import { EducationalBlock, Word } from "../../types/types";
import classes from "./EducationalBlockPage.module.scss";

interface EducationalBlockPageProps {
  educationalBlocks: EducationalBlock[];
}

export const EducationalBlockPage: FC<EducationalBlockPageProps> = ({
  educationalBlocks,
}) => {
  const params = useParams();

  function geteducationalBlockById(id: number) {
    let educationalBlock: EducationalBlock = educationalBlocks[0];
    educationalBlocks.forEach((item) => {
      if (item.id === id) {
        educationalBlock = item;
      }
    });
    return educationalBlock;
  }
  const [educationalBlock, setEducationalBlock] = useState<EducationalBlock>(
    geteducationalBlockById(Number(params.id))
  );

  useEffect(() => {
    document.title = `${educationalBlock.title}`;
  }, []);

  const words: Word[] = educationalBlock.words;
  const [wordIndex, setWordIndex] = useState(0);
  const [showCard, setShowCard] = useState<boolean>(true);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const numberOfWords: number = words.length;
  const currentWord: Word = words[wordIndex];
  const [isShowWords, setIsShowWords] = useState(false);

  function flippedCard() {
    setIsFlipped(!isFlipped);
  }

  function nextCard() {
    if (wordIndex !== words.length - 1) {
      setWordIndex(wordIndex + 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  }

  function previousCard() {
    if (wordIndex !== 0) {
      setWordIndex(wordIndex - 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  }

  const isDisabledButtonNext: boolean = wordIndex === words.length - 1;
  const isDisabledButtonPrevious: boolean = wordIndex === 0;

  //handler

  const handlerClickShowWords = () => {
    setIsShowWords(!isShowWords);
  };

  return (
    <section>
      <Container maxWidth="750px">
        <div className={classes.educationalBlockPage}>
          <div className={classes.top}>
            <h2>{educationalBlock.title}</h2>
            <button>
              <FaEllipsisV />
            </button>
          </div>
          <div>
            <Link
              className={classes.modes}
              to={`/module/${educationalBlock.id}/modes`}
            >
              Режимы игры
            </Link>
          </div>
          <div style={{ height: "370px" }}>
            <AnimatePresence>
              {showCard && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <FlipCard
                    isFlipped={isFlipped}
                    flippedCard={flippedCard}
                    word={currentWord}
                    numberOfWords={numberOfWords}
                    cardNumber={wordIndex + 1}
                    nextCard={nextCard}
                    previousCard={previousCard}
                    isDisabledButtonNext={isDisabledButtonNext}
                    isDisabledButtonPrevious={isDisabledButtonPrevious}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {isShowWords ? (
            <IButton onClick={handlerClickShowWords}>
              Скрыть все термины
            </IButton>
          ) : (
            <IButton onClick={handlerClickShowWords}>
              Показать все термины
            </IButton>
          )}
          <>
            <AnimatePresence>
              {isShowWords && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <WordList words={educationalBlock.words} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        </div>
      </Container>
    </section>
  );
};
