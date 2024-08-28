import styles from "./style.module.scss";

const BookSkeleton = () => {
  return (
    <>
      <div className={styles.bookSkeleton}></div>
      <div className={styles.bookSkeleton__aside}>
        <div className={styles.bookSkeleton__title}>
          <div></div>
        </div>
        <div className={styles.bookSkeleton__item}>
          <div></div>
        </div>
        <div className={styles.bookSkeleton__item}>
          <div></div>
        </div>
        <div className={styles.bookSkeleton__item}>
          <div></div>
        </div>
        <div className={styles.bookSkeleton__item}>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BookSkeleton;
