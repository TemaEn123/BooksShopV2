import { memo } from "react";

import styles from "./styles.module.scss";

interface Props {
  title: string;
}

const FiltersTitle = memo(({ title }: Props) => {
  return <h3 className={styles.title}>{title}</h3>;
});

export default FiltersTitle;
