import { FC } from "react";
import GameModesList from "../../components/gameModesList/GameModesList";
import { useParams } from "react-router";
import { Container } from "../../components/Container";

interface GameModesPageProps {}

export const GameModesPage: FC<GameModesPageProps> = () => {
  const params = useParams();

  return (
    <section>
      <Container>
        <GameModesList idLearnModule={Number(params.id)} />
      </Container>
    </section>
  );
};
