import React, { FC } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";

import styles from "./GameModes.module.scss";

interface GameModesProps {
  idLearnModule: number;
}

const GameModes: FC<GameModesProps> = ({ idLearnModule }) => {
  return (
    <div className={styles.modes}>
      <Link to={`/module/${idLearnModule}/hard`}>Усердная тренировка</Link>
    </div>
  );
};

export default GameModes;
