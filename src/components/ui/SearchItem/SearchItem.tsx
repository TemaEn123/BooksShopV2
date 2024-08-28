import { memo } from "react";

import { Link } from "react-router-dom";

import { IBook } from "../../../interfaces/interfaces";

import styles from "./style.module.scss";

interface Props {
  book: IBook;
  similar?: boolean;
}

const SearchItem = memo(({ book, similar }: Props) => {
  return (
    <div
      className={`${styles.searchItem} ${
        similar ? styles.searchItem_similar : ""
      }`}
    >
      <Link to={`../shop/${book.id}`}>
        <div className={styles.searchItem__img}>
          <img src={book.image} alt={book.title} />
        </div>
        <div className={styles.searchItem__info}>
          <h4>{book.title}</h4>
        </div>
      </Link>
    </div>
  );
});

export default SearchItem;
