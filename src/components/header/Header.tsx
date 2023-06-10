import { FC } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import classes from "./Header.module.scss";
import navItems from "../../data/navLinks";
import { CiUser } from "react-icons/ci";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <Logo />
          <Navigation navigationItems={navItems} />
          <CiUser fontSize={27} />
        </div>
      </Container>
    </header>
  );
};
