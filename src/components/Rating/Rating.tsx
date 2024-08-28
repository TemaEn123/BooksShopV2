import { memo } from "react";

import styles from "./styles.module.scss";

interface Props {
  rating: number;
  book?: boolean;
}

const Rating = memo(({ rating, book }: Props) => {
  const ratingWidth: number = Math.round(rating * 100);

  return (
    <div className={`${styles.rating} ${book ? styles.rating_book : ""}`}>
      <div className={styles.rating__body}>
        <div
          style={{ width: `${ratingWidth}%` }}
          className={styles.rating__active}
        ></div>
        <div className={styles.rating__items}>
          <input
            type="radio"
            value="5"
            className={styles.rating__item}
            name="rating"
          />
          <label className={styles.rating__label}></label>
          <input
            type="radio"
            value="4"
            className={styles.rating__item}
            name="rating"
          />
          <label className={styles.rating__label}></label>
          <input
            type="radio"
            value="3"
            className={styles.rating__item}
            name="rating"
          />
          <label className={styles.rating__label}></label>
          <input
            type="radio"
            value="2"
            className={styles.rating__item}
            name="rating"
          />
          <label className={styles.rating__label}></label>
          <input
            type="radio"
            value="1"
            className={styles.rating__item}
            name="rating"
          />
          <label className={styles.rating__label}></label>
        </div>
      </div>
      <span className={styles.rating__value}> {(rating * 5).toFixed(2)}</span>
    </div>
  );
});

export default Rating;
