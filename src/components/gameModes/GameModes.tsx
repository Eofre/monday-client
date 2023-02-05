import React from "react";
import Navigation from "../navigation/Navigation";
import gameModes from "../../data/gameModes";
import styles from "./GameModes.module.scss";

const GameModes = () => {
  return (
    <div className={styles.modes}>
      <Navigation navItems={gameModes} />
    </div>
  );
};

export default GameModes;
