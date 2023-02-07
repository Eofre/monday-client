import React, { FC } from "react";
import { Link } from "react-router-dom";
import { GameMode } from "../../types/types";
import styles from "./GameModeItem.module.scss";

interface GameModeItemProps {
  gameMode: GameMode;
}

const GameModeItem: FC<GameModeItemProps> = ({ gameMode }) => {
  return (
    <Link className={styles.mode} to={gameMode.path}>
      <div className={styles.left}>
        <h3>{gameMode.name}</h3>
        <p>{gameMode.description}</p>
      </div>
      <div className={styles.right}>{gameMode.img}</div>
    </Link>
  );
};

export default GameModeItem;
