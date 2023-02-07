import { FC } from "react";
import Container from "../../components/container/Container";
import styles from "./GameModesPage.module.scss";
import GameModesList from "../../components/gameModesList/GameModesList";
import { useParams } from "react-router";

interface GameModesPageProps {}

const GameModesPage: FC<GameModesPageProps> = () => {
  const params = useParams();

  return (
    <section>
      <Container>
        <GameModesList idLearnModule={Number(params.id)} />
      </Container>
    </section>
  );
};

export default GameModesPage;
