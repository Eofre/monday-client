import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LearnModule } from "../../types/types";
import styles from "./LearnModuleItem.module.scss";

interface LearnModuleItemProps {
  learnModule: LearnModule;
}

const LearnModuleItem: FC<LearnModuleItemProps> = ({ learnModule }) => {
  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <h3 className={styles.title}>{learnModule.title}</h3>
        <p className={styles.description}>{learnModule.description}</p>
        <div className={styles.language}>
          <p>язык термина: {learnModule.languageTerm}</p>
          <p>язык определения: {learnModule.languageDefinition}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.terms}>
          Кол-во терминов: {learnModule.words.length}
        </p>
      </div>
    </li>
  );
};

export default LearnModuleItem;
