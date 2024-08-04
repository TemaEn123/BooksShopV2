import Search from "../Search/Search";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  text: string;
  page: string;
}

const TopBlock = ({ title, text, page }: Props) => {
  return (
    <div className={styles.topBlock}>
      <div className={styles.topBlock__container}>
        <div
          className={`${styles.topBlock__content} ${
            page === "blog" ? styles.blog : ""
          }`}
        >
          <div className={styles.topBlock__info}>
            <h1>{title}</h1>
            <p>{text}</p>
            <Search type="books" placeholder="Search Book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
