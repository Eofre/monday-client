import React, { FC } from "react";
import { NavLink } from "../../types/types";

interface NavigationProps {
  navLinks: NavLink[];
}

const Navigation: FC<NavigationProps> = ({ navLinks }) => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li>
            <NavLink></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
