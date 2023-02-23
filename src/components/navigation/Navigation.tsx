import { FC } from "react";
import { NavItem } from "../../types/types";
import INavLink from "../UI/navLink/INavLink";
import classes from "./Navigation.module.scss";

interface NavigationProps {
  navigationItems: NavItem[];
}

export const Navigation: FC<NavigationProps> = ({ navigationItems }) => {
  return (
    <nav>
      <ul className={classes.navigation}>
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.name}>
            <INavLink navItem={navigationItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
