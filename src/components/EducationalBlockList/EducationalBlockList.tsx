import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EducationalBlockItem } from "../EducationalBlockItem";
import classes from "./EducationalBlockList.module.scss";

interface EducationalBlockListProps {}

export const EducationalBlockList: FC<EducationalBlockListProps> = () => {
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
    <ul className={classes.educationalBlockList}>
      {educationalBlocks.map((educationalBlock) => (
        <EducationalBlockItem
          key={educationalBlock.id}
          educationalBlock={educationalBlock}
        />
      ))}
    </ul>
  );
};
