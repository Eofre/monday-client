import React, { FC, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Countdown from "../../components/countdown/Countdown";
import FormAnswerToQuestion from "../../components/formAnswerToQuestion/FormAnswerToQuestion";
import GameStatistics from "../../components/gameStatistics/GameStatistics";
import StartGameForm from "../../components/startGameForm/StartGameForm";
import { LearnModule, Word } from "../../types/types";
import styles from "./HardModePage.module.scss";

interface HardModePageProps {
  learnModules: LearnModule[];
}

const HardModePage: FC<HardModePageProps> = ({ learnModules }) => {
  const params = useParams();
  const [step, setStep] = useState<number>(0);
  const learnModule: LearnModule = getLearnModuleById(Number(params.id));
  const [words, setWords] = useState<Word[]>(learnModule.words);
  // const [word, setWord] = useState<Word>(wordsRandElement(words));
  const word: Word = words[step];
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isResultGame, setIsResultGame] = useState<boolean>(false);
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(15);
  const [answer, setAnswer] = useState<string>("");
  const [numberAnswers, setNumberAnswers] = useState(words.length);
  const [numberWrongAnswers, setNumberWrongAnswers] = useState(0);
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);

  function getLearnModuleById(id: number) {
    let learnModule: LearnModule = learnModules[0];
    learnModules.forEach((item) => {
      if (item.id === id) {
        learnModule = item;
      }
    });
    return learnModule;
  }

  function wordsRandElement(words: Word[]) {
    let randomIndex: number = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function resetCountdown() {
    setSeconds(15);
    setIsCounting(false);
  }

  function startCountdown() {
    setIsCounting(true);
  }

  function sendAnswer() {
    resetCountdown();
    setAnswer("");

    if (words.length === step + 1 && word.term === answer.trim()) {
      console.log("finish game!");
      setIsResultGame(true);
    } else {
      if (word.term === answer.trim()) {
        setStep(step + 1);
        setNumberAnswers(numberAnswers - 1);
        startCountdown();
      }
      if (word.term !== answer.trim()) {
        setNumberWrongAnswers(numberWrongAnswers + 1);
        setIsShowAnswer(true);
      }
      if (isShowAnswer && word.term === answer.trim()) {
        setStep(step + 1);
        setNumberAnswers(numberAnswers - 1);
        setIsShowAnswer(false);
        startCountdown();
      }
      if (word.term === answer.trim() && !isShowAnswer) {
        setNumberCorrectAnswers(numberCorrectAnswers + 1);
      }
    }
  }

  function startGame() {
    setIsStartGame(true);
    setIsCounting(true);
  }

  if (seconds === 0 && !isCounting) {
    sendAnswer();
  }

  const handlerClickSendAnswer = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    sendAnswer();
  };

  const handlerChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handlerClickStart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    startGame();
  };

  return (
    <section>
      <Container>
        {isStartGame ? (
          <>
            {isResultGame ? (
              <div>Конец!</div>
            ) : (
              <div className={styles.game}>
                <GameStatistics
                  numberAnswers={numberAnswers}
                  numberCorrectAnswers={numberCorrectAnswers}
                  numberWrongAnswers={numberWrongAnswers}
                />
                {!isShowAnswer && (
                  <Countdown
                    seconds={seconds}
                    setSeconds={setSeconds}
                    isCounting={isCounting}
                    setIsCounting={setIsCounting}
                  />
                )}
                <FormAnswerToQuestion
                  word={word}
                  answer={answer}
                  handlerChangeAnswer={handlerChangeAnswer}
                  handlerClickSendAnswer={handlerClickSendAnswer}
                  isShowAnswer={isShowAnswer}
                />
              </div>
            )}
          </>
        ) : (
          <StartGameForm handlerClickStart={handlerClickStart} />
        )}
      </Container>
    </section>
  );
};

export default HardModePage;
