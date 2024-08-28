import { memo } from "react";
import { ISimilarBooks } from "../../interfaces/interfaces";
import SearchItem from "../ui/SearchItem/SearchItem";

import styles from "./style.module.scss";

interface Props {
  books: ISimilarBooks | undefined;
}

const SimilarBooks = memo(({ books }: Props) => {
  return (
    <aside className={styles.similarBooks}>
      <h2>Similar Books:</h2>
      {books!.similar_books.map((book) => (
        <SearchItem key={book.id} book={book} similar />
      ))}
    </aside>
  );
});

export default SimilarBooks;
