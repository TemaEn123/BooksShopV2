import { memo } from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  link: string;
}

const CategoryTitle = memo(({ title, link }: Props) => {
  return (
    <Link to={link} className={styles.title}>
      <h2>{title}</h2>
    </Link>
  );
});

export default CategoryTitle;
