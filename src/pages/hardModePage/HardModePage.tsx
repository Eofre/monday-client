import React, { FC, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Countdown from "../../components/countdown/Countdown";
import FormAnswerToQuestion from "../../components/formAnswerToQuestion/FormAnswerToQuestion";
import GameStatistics from "../../components/gameStatistics/GameStatistics";
import ResultGame from "../../components/resultGame/ResultGame";
import StartGameForm from "../../components/startGameForm/StartGameForm";
import { LearnModule, UserAnswer, Word } from "../../types/types";
import styles from "./HardModePage.module.scss";

interface HardModePageProps {
  learnModules: LearnModule[];
}

const HardModePage: FC<HardModePageProps> = ({ learnModules }) => {
  const params = useParams();
  const [step, setStep] = useState<number>(0);
  const learnModule: LearnModule = getLearnModuleById(Number(params.id));
  const [words, setWords] = useState<Word[]>(learnModule.words);
  const word: Word = words[step];
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isResultGame, setIsResultGame] = useState<boolean>(false);
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(10);
  const [answer, setAnswer] = useState<string>("");
  const [numberAnswers, setNumberAnswers] = useState(words.length);
  const [numberWrongAnswers, setNumberWrongAnswers] = useState(0);
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const isProcessGame = step !== words.length;

  const isRightAnswer = isProcessGame && word.term === answer.trim();
  const isWrongAnswer = isProcessGame && word.term !== answer.trim();

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
  function stopCountdown() {
    setIsCounting(false);
  }

  function sendAnswer() {
    // resetCountdown();

    if (isRightAnswer) {
      if (!isShowAnswer) {
        setNumberCorrectAnswers(numberCorrectAnswers + 1);
        setUserAnswers([...userAnswers, { word, answer, isRight: true }]);
        setNumberAnswers(numberAnswers - 1);

        setTimeout(() => {
          setStep(step + 1);
          resetCountdown();
          startCountdown();
          setAnswer("");
        }, 500);
      }
      if (isShowAnswer) {
        setTimeout(() => {
          setStep(step + 1);
          resetCountdown();
          startCountdown();
          setAnswer("");
          setIsShowAnswer(false);
        }, 500);
      }
    }
    if (isWrongAnswer) {
      if (!isShowAnswer) {
        setNumberWrongAnswers(numberWrongAnswers + 1);
        setUserAnswers([...userAnswers, { word, answer, isRight: false }]);
        setNumberAnswers(numberAnswers - 1);

        setTimeout(() => {
          setIsShowAnswer(true);
          resetCountdown();
          setAnswer("");
        }, 500);
      }
      if (isShowAnswer) {
        setTimeout(() => {
          setAnswer("");
        }, 500);
      }
    }
  }

  function startGame() {
    setIsStartGame(true);
    startCountdown();
  }

  if (seconds === 0) {
    stopCountdown();
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
            {!isProcessGame ? (
              <ResultGame userAnswers={userAnswers} />
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
                  isRightAnswer={isRightAnswer}
                  isWrongAnswer={isWrongAnswer}
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
