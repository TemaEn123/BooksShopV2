import { memo } from "react";

import { Link } from "react-router-dom";

import Rating from "../../Rating/Rating";
import BuyButton from "../../BuyButton/BuyButton";

import { BookByFilters } from "../../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  book: BookByFilters;
  shop: boolean;
}

const BookItem = memo(({ book, shop }: Props) => {
  return (
    <div className={`${styles.book} ${shop ? styles.shop : ""}`}>
      <div className={styles.book__content}>
        <Link
          to={shop ? `./${book.id}` : `shop/${book.id}`}
          className={styles.book__img}
        >
          <img src={book.image} alt={book.title} />
        </Link>
        <div className={styles.book__info}>
          <Link
            to={shop ? `./${book.id}` : `shop/${book.id}`}
            className={styles.book__title}
          >
            <h4>{book.title}</h4>
          </Link>
          <div className={styles.book__rating}>
            <Rating rating={book.rating.average} />
          </div>
          <div className={styles.book__buy}>
            <BuyButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default BookItem;
