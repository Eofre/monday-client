import { FC } from "react";
import { GiTimeBomb } from "react-icons/gi";
import { GameMode } from "../../types/types";
import { GameModesItem } from "../GameModesItem";
import classes from "./GameModesList.module.scss";

interface GameModesListProps {
  educationalBlockId: number;
}

export const GameModesList: FC<GameModesListProps> = ({
  educationalBlockId,
}) => {
  const gamesModes: GameMode[] = [
    {
      name: "Письмо на время",
      description: "Лучший способ отточить термины до автоматизма!",
      path: `/module/${educationalBlockId}/modes/hard`,
      img: <GiTimeBomb />,
    },
  ];

  return (
    <ul className={classes.gameModesList}>
      {gamesModes.map((mode) => (
        <GameModesItem key={mode.path} gameMode={mode} />
      ))}
    </ul>
  );
};
