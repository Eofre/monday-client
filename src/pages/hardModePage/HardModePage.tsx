import React, { FC, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import Countdown from "../../components/countdown/Countdown";
import FormAnswerToQuestion from "../../components/formAnswerToQuestion/FormAnswerToQuestion";
import { LearnModule, Word } from "../../types/types";

interface HardModePageProps {
  learnModules: LearnModule[];
}

const HardModePage: FC<HardModePageProps> = ({ learnModules }) => {
  const params = useParams();
  const [step, setStep] = useState<number>(0);
  const learnModule: LearnModule = getLearnModuleById(Number(params.id));
  const words: Word[] = learnModule.words;
  const word: Word = words[step];
  const [isCounting, setIsCounting] = useState<boolean>(true);
  const [isResultGame, setIsResultGame] = useState<boolean>(false);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(word.term.length);
  const [answer, setAnswer] = useState<string>("");

  function getLearnModuleById(id: number) {
    let learnModule: LearnModule = learnModules[0];
    learnModules.forEach((item) => {
      if (item.id === id) {
        learnModule = item;
      }
    });
    return learnModule;
  }

  function resetCountdown() {
    setSeconds(word.term.length);
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
        startCountdown();
      }
      if (word.term !== answer.trim()) {
        setIsShowAnswer(true);
      }
      if (isShowAnswer && word.term === answer.trim()) {
        setStep(step + 1);
        setIsShowAnswer(false);
        startCountdown();
      }
    }
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

  return (
    <section>
      <Container>
        {isResultGame ? (
          <div>Конец!</div>
        ) : (
          <div>
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
      </Container>
    </section>
  );
};

export default HardModePage;
