import React, { FC } from "react";
import { LearnModule } from "../../types/types";
import LearnModuleItem from "../learnModuleItem/LearnModuleItem";
import styles from "./LearnModuleList.module.scss";

interface LearnModuleListProps {
  learnModules: LearnModule[];
}

const LearnModuleList: FC<LearnModuleListProps> = ({ learnModules }) => {
  return (
    <ul className={styles.list}>
      {learnModules.map((module) => (
        <LearnModuleItem key={module.id} learnModule={module} />
      ))}
    </ul>
  );
};

export default LearnModuleList;
