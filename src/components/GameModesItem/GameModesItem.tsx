import { FC } from "react";
import { Link } from "react-router-dom";
import { GameMode } from "../../types/types";
import classes from "./GameModesItem.module.scss";

interface GameModesItemProps {
  gameMode: GameMode;
}

export const GameModesItem: FC<GameModesItemProps> = ({ gameMode }) => {
  return (
    <Link className={classes.gameModesItem} to={gameMode.path}>
      <div className={classes.left}>
        <h3>{gameMode.name}</h3>
        <p>{gameMode.description}</p>
      </div>
      <div className={classes.right}>{gameMode.img}</div>
    </Link>
  );
};
