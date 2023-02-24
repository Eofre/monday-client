import { FC } from "react";
import { useGetAllEducationalBlocksQuery } from "../../store/educationBlock/educationalBlock.api";
import { EducationalBlockItem } from "../EducationalBlockItem";
import classes from "./EducationalBlockList.module.scss";

interface EducationalBlockListProps {}

export const EducationalBlockList: FC<EducationalBlockListProps> = () => {
  const { data, isSuccess, isLoading, error } =
    useGetAllEducationalBlocksQuery("");
  return (
    <>
      {error && <h1>Ошибка!</h1>}
      {isLoading && <h1>Загрузка...</h1>}
      {isSuccess && (
        <ul className={classes.educationalBlockList}>
          {data.map((educationalBlock) => (
            <EducationalBlockItem
              key={educationalBlock.id}
              educationalBlock={educationalBlock}
            />
          ))}
        </ul>
      )}
    </>
  );
};
