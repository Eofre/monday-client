import { FC } from "react";
import { NavItem } from "../../types/types";
import styles from "./Navigation.module.scss";
import ListRow from "../listRow/ListRow";
import INavLink from "../UI/navLink/INavLink";

interface NavigationProps {
  navItems: NavItem[];
}

const Navigation: FC<NavigationProps> = ({ navItems }) => {
  return (
    <nav>
      <ListRow>
        {navItems.map((link) => (
          <li key={link.name}>
            <INavLink navItem={link} />
          </li>
        ))}
      </ListRow>
    </nav>
  );
};

export default Navigation;
