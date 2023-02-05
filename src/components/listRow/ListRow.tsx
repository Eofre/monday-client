import React, { FC } from "react";
import styles from "./ListRow.module.scss";

interface ListRowProps {
  children: React.ReactNode;
}

const ListRow: FC<ListRowProps> = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default ListRow;
