import styles from "./style.module.scss";

const ArticleSkeleton = () => {
  return (
    <div className={styles.articleSkeleton}>
      <div className={styles.articleSkeleton__img}>
        <div></div>
      </div>
      <div className={styles.articleSkeleton__title}></div>
      <div className={styles.articleSkeleton__text}></div>
      <div className={styles.articleSkeleton__text}></div>
      <div className={styles.articleSkeleton__text}></div>
      <div className={styles.articleSkeleton__text}></div>
      <div className={styles.articleSkeleton__text}></div>
    </div>
  );
};

export default ArticleSkeleton;
