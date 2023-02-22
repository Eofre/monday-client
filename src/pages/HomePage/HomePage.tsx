import { FC } from "react";
import { Container } from "../../components/Container";
import { EducationalBlockList } from "../../components/EducationalBlockList";
import classes from "./HomePage.module.scss";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => (
  <section>
    <Container>
      <div>
        <EducationalBlockList />
      </div>
    </Container>
  </section>
);
