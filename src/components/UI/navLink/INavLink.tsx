import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../../types/types";
import styles from "./INavLink.module.scss";

interface INavLinkProps {
  navItem: NavItem;
}

const INavLink: FC<INavLinkProps> = ({ navItem }) => {
  return (
    <NavLink className={styles.link} to={navItem.path}>
      {navItem.name}
    </NavLink>
  );
};

export default INavLink;
