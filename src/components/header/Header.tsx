import { FC } from "react";
import Container from "../container/Container";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>Header</Container>
    </header>
  );
};

export default Header;
