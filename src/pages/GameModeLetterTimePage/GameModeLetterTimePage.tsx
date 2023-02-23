import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { FormAnswerQuestion } from "../../components/FormAnswerQuestion";
import { FormStartGame } from "../../components/FormStartGame";
import { GameStatistics } from "../../components/GameStatistics";
import { ResultGame } from "../../components/ResultGame";
import { EducationalBlock, UserAnswer, Word } from "../../types/types";
import classes from "./GameModeLetterTimePage.module.scss";

interface GameModeLetterTimePageProps {
  educationalBlocks: EducationalBlock[];
}

export const GameModeLetterTimePage: FC<GameModeLetterTimePageProps> = ({
  educationalBlocks,
}) => {
  const params = useParams();

  const [step, setStep] = useState<number>(0);
  const stepIncrease = 1;

  const educationalBlock: EducationalBlock = getEducationalBlockById(
    Number(params.id)
  );
  const words: Word[] = educationalBlock.words;
  const word: Word = words[step];
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [answer, setAnswer] = useState<string>("");

  const [seconds, setSeconds] = useState<number>(15);

  const [numberAnswers, setNumberAnswers] = useState(words.length);
  const [numberWrongAnswers, setNumberWrongAnswers] = useState(0);
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);

  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const isProcessGame = step !== words.length;
  const isRightAnswer = isProcessGame && word.term === answer.trim();
  const isWrongAnswer = isProcessGame && word.term !== answer.trim();
  const isCompletedAnswerTime = seconds === 0;

  const score = Math.floor((numberCorrectAnswers / words.length) * 100);

  const [outlineInput, setOutlineInput] = useState("");

  function getEducationalBlockById(id: number) {
    let educationalBlock: EducationalBlock = educationalBlocks[0];
    educationalBlocks.forEach((item) => {
      if (item.id === id) {
        educationalBlock = item;
      }
    });
    return educationalBlock;
  }

  //countdown

  function resetCountdown() {
    setSeconds(15);
    setIsCounting(false);
  }

  function startCountdown() {
    setIsCounting(true);
  }

  //game

  function sendRightAnswer() {
    if (!isShowAnswer) {
      setNumberCorrectAnswers(numberCorrectAnswers + 1);
      setUserAnswers([...userAnswers, { word, answer, isRight: true }]);
      setNumberAnswers(numberAnswers - 1);
      setOutlineInput("2px solid rgb(160, 255, 141)");

      setTimeout(() => {
        setOutlineInput("");
        setStep(step + stepIncrease);
        resetCountdown();
        startCountdown();
        setAnswer("");
      }, 500);
    }
    if (isShowAnswer) {
      setOutlineInput("2px solid rgb(160, 255, 141)");

      setTimeout(() => {
        setStep(step + stepIncrease);
        resetCountdown();
        startCountdown();
        setAnswer("");
        setIsShowAnswer(false);
        setOutlineInput("");
      }, 500);
    }
  }

  function sendWrongAnswer() {
    if (!isShowAnswer) {
      setNumberWrongAnswers(numberWrongAnswers + 1);
      setUserAnswers([...userAnswers, { word, answer, isRight: false }]);
      setNumberAnswers(numberAnswers - 1);
      setOutlineInput("2px solid rgb(255, 105, 105)");

      setTimeout(() => {
        setIsShowAnswer(true);
        resetCountdown();
        setAnswer("");
        setOutlineInput("");
      }, 500);
    }
    if (isShowAnswer) {
      setOutlineInput("2px solid rgb(255, 105, 105)");

      setTimeout(() => {
        setOutlineInput("");
        setAnswer("");
      }, 500);
    }
  }

  function sendAnswer() {
    if (isRightAnswer) {
      sendRightAnswer();
    }
    if (isWrongAnswer) {
      sendWrongAnswer();
    }
  }

  function startGame() {
    setIsStartGame(true);
    startCountdown();
  }

  function restartGame() {
    setStep(0);
    setNumberAnswers(words.length);
    setNumberCorrectAnswers(0);
    setNumberWrongAnswers(0);
    setUserAnswers([]);
  }

  function exitGame() {
    setIsStartGame(false);
    setStep(0);
    setNumberAnswers(words.length);
    setNumberCorrectAnswers(0);
    setNumberWrongAnswers(0);
    setUserAnswers([]);
  }

  useEffect(() => {
    if (isCompletedAnswerTime) {
      sendAnswer();
    }
  }, [seconds]);

  //event handlers

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

  const handlerClickRestartGame = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    restartGame();
  };

  const handlerClickExitGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    exitGame();
  };

  return (
    <section>
      <Container>
        {isStartGame ? (
          <>
            {!isProcessGame ? (
              <ResultGame
                handlerClickRestartGame={handlerClickRestartGame}
                handlerClickExitGame={handlerClickExitGame}
                userAnswers={userAnswers}
                score={score}
              />
            ) : (
              <div className={classes.game}>
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
                <FormAnswerQuestion
                  word={word}
                  answer={answer}
                  handlerChangeAnswer={handlerChangeAnswer}
                  handlerClickSendAnswer={handlerClickSendAnswer}
                  isShowAnswer={isShowAnswer}
                  outlineInput={outlineInput}
                />
              </div>
            )}
          </>
        ) : (
          <FormStartGame handlerClickStart={handlerClickStart} />
        )}
      </Container>
    </section>
  );
};
