import { FC } from "react";
import classes from "./BlocksPage.module.scss";
import { useGetAllEducationalBlocksQuery } from "../../store/educationBlock/educationalBlock.api";
import { Preloader } from "../../components/Preloader";
import { EducationalBlockList } from "../../components/EducationalBlockList";

interface BlocksPageProps {}

export const BlocksPage: FC<BlocksPageProps> = () => {
  const { data, isSuccess, isLoading, error } =
    useGetAllEducationalBlocksQuery("");

  return (
    <section>
      {error && <h1>Ошибка!</h1>}
      {isLoading && <Preloader />}
      {isSuccess && <EducationalBlockList list={data} />}
    </section>
  );
};
