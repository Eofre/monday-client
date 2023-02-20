import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import FlipCard from "../../components/flipCard/FlipCard";
import { EducationalBlock, Word } from "../../types/types";
import styles from "./LearnModulePage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import WordList from "../../components/wordList/WordList";
import IButton from "../../components/UI/button/IButton";

interface LearnModulePageProps {
  learnModules: EducationalBlock[];
}

const LearnModulePage: FC<LearnModulePageProps> = ({ learnModules }) => {
  const params = useParams();

  function getLearnModuleById(id: number) {
    let learnModule: EducationalBlock = learnModules[0];
    learnModules.forEach((item) => {
      if (item.id === id) {
        learnModule = item;
      }
    });
    return learnModule;
  }
  const [learnModule, setLearnModule] = useState<EducationalBlock>(
    getLearnModuleById(Number(params.id))
  );

  useEffect(() => {
    document.title = `${learnModule.title}`;
  }, []);

  const words: Word[] = learnModule.words;
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
        <div className={styles.body}>
          <div className={styles.top}>
            <h2>{learnModule.title}</h2>
            <button>
              <FaEllipsisV />
            </button>
          </div>
          <div>
            <Link
              className={styles.modes}
              to={`/module/${learnModule.id}/modes`}
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
                  <WordList words={learnModule.words} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        </div>
      </Container>
    </section>
  );
};

export default LearnModulePage;
