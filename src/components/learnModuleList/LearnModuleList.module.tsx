import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { fetchEducationalBlocks } from "../../store/action-creators/educationalBlock";

import { EducationalBlock } from "../../types/types";
import LearnModuleItem from "../learnModuleItem/LearnModuleItem";
import styles from "./LearnModuleList.module.scss";

interface LearnModuleListProps {
  learnModules: EducationalBlock[];
}

const LearnModuleList: FC<LearnModuleListProps> = ({ learnModules }) => {
  const { educationalBlocks, error, loading } = useTypedSelector(
    (state) => state.educationalBlock
  );
  const { fetchEducationalBlocks } = useActions();

  useEffect(() => {
    fetchEducationalBlocks();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>Ошибка...</h1>;
  }

  return (
    <ul className={styles.list}>
      {educationalBlocks.map((module) => (
        <LearnModuleItem key={module.id} learnModule={module} />
      ))}
    </ul>
  );
};

export default LearnModuleList;
