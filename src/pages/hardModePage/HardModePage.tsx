import React, { FC, useState } from "react";
import { useParams } from "react-router";
import Container from "../../components/container/Container";
import { LearnModule } from "../../types/types";

interface HardModePageProps {
  learnModules: LearnModule[];
}

const HardModePage: FC<HardModePageProps> = ({ learnModules }) => {
  const params = useParams();
  const [step, setStep] = useState<number>(0);
  const [learnModule, setLearnModule] = useState(
    getLearnModuleById(Number(params.id))
  );

  function getLearnModuleById(id: number) {
    let learnModule: LearnModule = learnModules[0];
    learnModules.forEach((item) => {
      if (item.id === id) {
        learnModule = item;
      }
    });
    return learnModule;
  }

  return (
    <section>
      <Container>Hard</Container>
    </section>
  );
};

export default HardModePage;
