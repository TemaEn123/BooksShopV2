import { memo } from "react";

import styles from "./style.module.scss";

interface Props {
  count: number;
}

const BlogItemSkeleton = memo(({ count }: Props) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} className={styles.blogItemSkeleton}>
          <div className={styles.blogItemSkeleton__wrapper}>
            <div className={styles.blogItemSkeleton__img}></div>
            <div className={styles.blogItemSkeleton__info}>
              <div className={styles.blogItemSkeleton__title}></div>
              <div className={styles.blogItemSkeleton__text}></div>
              <div className={styles.blogItemSkeleton__text}></div>
              <div className={styles.blogItemSkeleton__text}></div>
              <div className={styles.blogItemSkeleton__text}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default BlogItemSkeleton;
