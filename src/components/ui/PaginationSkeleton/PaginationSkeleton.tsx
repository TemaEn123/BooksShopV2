import { memo } from "react";

import styles from "./style.module.scss";

interface Props {
  count: number;
}

const PaginationSkeleton = memo(({ count }: Props) => {
  return (
    <div className={styles.paginationSkeleton}>
      {[...Array(count)].map((_, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
});

export default PaginationSkeleton;
