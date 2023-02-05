import { FC } from "react";
import Container from "../../components/container/Container";
import styles from "./Home.module.scss";
import modules from "../../data/modules";
import LearnModuleList from "../../components/learnModuleList/LearnModuleList.module";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <LearnModuleList learnModules={modules} />
        </div>
      </Container>
    </section>
  );
};

export default Home;
