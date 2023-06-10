import { FC } from "react";
import { EducationalBlockItem } from "../EducationalBlockItem";
import classes from "./EducationalBlockList.module.scss";
import { IEducationalBlock } from "../../types/types";

interface EducationalBlockListProps {
  list: IEducationalBlock[];
}

export const EducationalBlockList: FC<EducationalBlockListProps> = ({
  list,
}) => {
  return (
    <>
      <ul className={classes.educationalBlockList}>
        {list.map((educationalBlock) => (
          <EducationalBlockItem
            key={educationalBlock.id}
            educationalBlock={educationalBlock}
          />
        ))}
      </ul>
    </>
  );
};
