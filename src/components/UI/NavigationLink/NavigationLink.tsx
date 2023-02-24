import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../../types/types";
import classes from "./NavigationLink.module.scss";

interface NavigationLinkProps {
  item: NavItem;
}

export const NavigationLink: FC<NavigationLinkProps> = ({ item }) => (
  <NavLink className={classes.navigationLink} to={item.path}>
    {item.name}
  </NavLink>
);
