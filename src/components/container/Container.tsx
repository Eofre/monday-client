import React, { FC } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Container: FC<ContainerProps> = ({ children, maxWidth }) => {
  return (
    <div style={{ maxWidth: maxWidth }} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
