import { FC } from "react";
import { useParams } from "react-router";
import { Container } from "../../components/Container";
import { GameModesList } from "../../components/GameModesList";

interface GameModesPageProps {}

export const GameModesPage: FC<GameModesPageProps> = () => {
  const params = useParams();

  return (
    <section>
      <GameModesList educationalBlockId={Number(params.id)} />
    </section>
  );
};
