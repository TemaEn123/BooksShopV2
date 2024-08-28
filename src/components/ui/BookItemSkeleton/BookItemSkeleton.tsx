import { memo } from "react";

import styles from "./style.module.scss";

interface Props {
  count: number;
  slider: boolean;
}

const BookItemSkeleton = memo(({ count, slider }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          className={`${styles.skeleton} ${slider ? styles.slider : ""}`}
          key={i}
        >
          <div className={styles.skeleton__img}></div>
          <div className={styles.skeleton__title}></div>
          <div className={styles.skeleton__rating}></div>
        </div>
      ))}
    </>
  );
});

export default BookItemSkeleton;
