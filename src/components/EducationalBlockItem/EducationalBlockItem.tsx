import { FC } from "react";
import { useNavigate } from "react-router";
import { EducationalBlock } from "../../types/types";
import classes from "./EducationalBlockItem.module.scss";

interface EducationalBlockItemProps {
  educationalBlock: EducationalBlock;
}

export const EducationalBlockItem: FC<EducationalBlockItemProps> = ({
  educationalBlock,
}) => {
  let navigate = useNavigate();

  const handlerClick = () => navigate(`/module/${educationalBlock.id}`);
  return (
    <li className={classes.educationalBlockItem} onClick={handlerClick}>
      <div className={classes.top}>
        <h3 className={classes.title}>{educationalBlock.name}</h3>
        <p className={classes.description}>{educationalBlock.description}</p>
      </div>
      <div>
        <p>Кол-во терминов: {educationalBlock.words.length}</p>
      </div>
    </li>
  );
};
