import { FC } from "react";
import Container from "../../components/container/Container";
import styles from "./Home.module.scss";
import LearnModuleList from "../../components/learnModuleList/LearnModuleList.module";
import { LearnModule } from "../../types/types";

interface HomeProps {
  learnModules: LearnModule[];
}

const Home: FC<HomeProps> = ({ learnModules }) => {
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <LearnModuleList learnModules={learnModules} />
        </div>
      </Container>
    </section>
  );
};

export default Home;
