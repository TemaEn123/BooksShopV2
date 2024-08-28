import { memo } from "react";

import { changeTitle } from "../../redux/slices/filtersSlice";
import { useAppDispatch } from "../../redux/store";

import Search from "../Search/Search";

import styles from "./styles.module.scss";

interface Props {
  title?: string;
  text?: string;
  page: string;
}

const TopBlock = memo(({ title, text, page }: Props) => {
  const dispatch = useAppDispatch();

  const handleSearch = (debouncedSearch: string | undefined) => {
    dispatch(changeTitle(debouncedSearch));
  };

  return (
    <div
      className={`${styles.topBlock} ${page === "single" ? styles.single : ""}`}
    >
      <div className={styles.topBlock__container}>
        {page !== "single" && (
          <div
            className={`${styles.topBlock__content} ${
              page === "blog" ? styles.blog : ""
            }`}
          >
            <div className={styles.topBlock__info}>
              <h1>{title}</h1>
              <p>{text}</p>
              <Search
                type="books"
                placeholder="Search Book"
                handleSearch={handleSearch}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default TopBlock;
