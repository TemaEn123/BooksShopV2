import { memo } from "react";

import Slider from "../Slider/Slider";
import CategoryTitle from "../ui/CategoryTitle/CategoryTitle";
import BookItemSkeleton from "../ui/BookItemSkeleton/BookItemSkeleton";
import CategoryTitleSkeleton from "../ui/CategoryTitleSkeleton/CategoryTitleSkeleton";
import Error from "../ui/Error/Error";

import { useGetBooksByGenreQuery } from "../../redux/services/booksApi";

import { IGenres } from "../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  genre: IGenres;
  title: string;
}

const CategoryBooks = memo(({ genre, title }: Props) => {
  const { data, error, isLoading } = useGetBooksByGenreQuery(genre);

  if (error) return <Error />;

  return (
    <>
      {isLoading ? (
        <section className={styles.categoryBooks}>
          <CategoryTitleSkeleton />
          <div className={styles.categoryBooks__loading}>
            <BookItemSkeleton count={5} slider />
          </div>
        </section>
      ) : (
        <section className={styles.categoryBooks}>
          <CategoryTitle
            title={title}
            link={`/shop?category=${title.toLowerCase()}`}
          />
          <Slider books={data!.books} />
        </section>
      )}
    </>
  );
});

export default CategoryBooks;
