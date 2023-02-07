import { FC } from "react";
import { NavItem } from "../../types/types";
import styles from "./Navigation.module.scss";

import INavLink from "../UI/navLink/INavLink";

interface NavigationProps {
  navItems: NavItem[];
}

const Navigation: FC<NavigationProps> = ({ navItems }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map((link) => (
          <li key={link.name}>
            <INavLink navItem={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
