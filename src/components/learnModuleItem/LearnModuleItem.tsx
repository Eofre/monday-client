import React, { FC } from "react";
import { useNavigate } from "react-router";
import { LearnModule } from "../../types/types";
import styles from "./LearnModuleItem.module.scss";

interface LearnModuleItemProps {
  learnModule: LearnModule;
}

const LearnModuleItem: FC<LearnModuleItemProps> = ({ learnModule }) => {
  let navigate = useNavigate();

  const handlerClick = () => navigate(`/module/${learnModule.id}`);
  return (
    <li className={styles.item} onClick={handlerClick}>
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
