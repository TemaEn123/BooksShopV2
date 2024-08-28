import { memo } from "react";

import { TypeOfHandle } from "../../interfaces/interfaces";

import styles from "./style.module.scss";

interface Props {
  currentPage: number;
  countOfPages: number;
  handlePageClick: (type: TypeOfHandle, page?: number) => void;
}

const Pagination = memo(
  ({ currentPage, countOfPages, handlePageClick }: Props) => {
    if (!countOfPages) return;

    return (
      <div className={styles.pagination}>
        <button onClick={() => handlePageClick("prev")}>{"<"}</button>
        {[...Array(countOfPages)].map((_, i) => {
          if (countOfPages <= 7) {
            return (
              <button
                onClick={() => handlePageClick("exact", i + 1)}
                key={i}
                className={`${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            );
          }

          if (i + 1 === 1) {
            return (
              <button
                onClick={() => handlePageClick("exact", i + 1)}
                key={i}
                className={`${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            );
          }

          if (i + 1 === countOfPages) {
            return (
              <button
                onClick={() => handlePageClick("exact", i + 1)}
                key={i}
                className={`${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            );
          }

          if (
            (i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1) ||
            i + 1 === currentPage
          ) {
            return (
              <button
                onClick={() => handlePageClick("exact", i + 1)}
                key={i}
                className={`${currentPage === i + 1 ? styles.active : ""}`}
              >
                {i + 1}
              </button>
            );
          } else if (i + 1 === currentPage - 2 || i + 1 === currentPage + 2) {
            return <span key={i}>...</span>;
          }
        })}
        <button onClick={() => handlePageClick("next")}>{">"}</button>
      </div>
    );
  }
);

export default Pagination;
