import React, { FC } from "react";
import { GameMode } from "../../types/types";
import GameModesItem from "../gameModesItem/GameModeItem";
import { GiTimeBomb } from "react-icons/gi";
import { BsFillPenFill } from "react-icons/bs";
import styles from "./GameModesList.module.scss";

interface GameModesListProps {
  idLearnModule: number;
}

const GameModesList: FC<GameModesListProps> = ({ idLearnModule }) => {
  const gamesModes: GameMode[] = [
    {
      name: "Письмо на время",
      description: "Лучший способ выучить слова!",
      path: `/module/${idLearnModule}/modes/hard`,
      img: <GiTimeBomb />,
    },
  ];

  return (
    <ul className={styles.modes}>
      {gamesModes.map((mode) => (
        <GameModesItem key={mode.path} gameMode={mode} />
      ))}
    </ul>
  );
};

export default GameModesList;
