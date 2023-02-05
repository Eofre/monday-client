import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import FlipCard from "../../components/flipCard/FlipCard";
import { LearnModule, Word } from "../../types/types";
import styles from "./LearnModulePage.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import GameModes from "../../components/gameModes/GameModes";

interface LearnModulePageProps {
  learnModules: LearnModule[];
}

const LearnModulePage: FC<LearnModulePageProps> = ({ learnModules }) => {
  const params = useParams();

  function getLearnModuleById(id: number) {
    let learnModule: LearnModule = learnModules[0];
    learnModules.forEach((item) => {
      if (item.id === id) {
        learnModule = item;
      }
    });
    return learnModule;
  }
  const [learnModule, setLearnModule] = useState<LearnModule>(
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

  return (
    <section>
      <Container>
        <div className={styles.body}>
          <div className={styles.top}>
            <h2>{learnModule.title}</h2>
          </div>
          <GameModes />
          <div>
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
        </div>
      </Container>
    </section>
  );
};

export default LearnModulePage;
