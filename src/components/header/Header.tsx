import { FC } from "react";

import Navigation from "../navigation/Navigation";
import styles from "./Header.module.scss";
import navItems from "../../data/navLinks";
import Logo from "../logo/Logo";
import { Container } from "../Container";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <Navigation navItems={navItems} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
