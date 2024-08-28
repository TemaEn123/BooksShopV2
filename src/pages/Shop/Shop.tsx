import { useState } from "react";

import { useLocation } from "react-router-dom";

import { useAppSelector } from "../../redux/store";
import { selectFilters } from "../../redux/slices/filtersSlice";
import { useGetBooksByFiltersQuery } from "../../redux/services/booksApi";

import queryString from "query-string";

import Pagination from "../../components/Pagination/Pagination";
import TopBlock from "../../components/TopBlock/TopBlock";
import Filters from "../../components/Filters/Filters";
import BookItem from "../../components/ui/BookItem/BookItem";
import Sorting from "../../components/Sorting/Sorting";
import Error from "../../components/ui/Error/Error";
import BookItemSkeleton from "../../components/ui/BookItemSkeleton/BookItemSkeleton";
import PaginationSkeleton from "../../components/ui/PaginationSkeleton/PaginationSkeleton";
import { BsFillFilterSquareFill } from "react-icons/bs";

import { usePagination } from "../../helpers/hooks/usePagination";

import { BOOKS_ON_PAGE } from "../../constants/constants";

import styles from "./styles.module.scss";

const title = "appreciate your author's work";
const text = "find your favorite book and read it here for free";

const Shop = () => {
  const location = useLocation();

  const currentGenre = queryString.parse(location.search);

  const filters = useAppSelector(selectFilters);

  const { data, error, isFetching } = useGetBooksByFiltersQuery(filters);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { handlePageClick } = usePagination({ currentPage, setCurrentPage });

  // const error = false;
  // const isFetching = true;

  return (
    <>
      <TopBlock title={title} text={text} page="shop" />
      <main className="main">
        <div className="container">
          {error ? (
            <Error />
          ) : (
            <div className={styles.shop}>
              <Filters
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                currentGenre={currentGenre}
              />
              <section className={styles.books}>
                <div className={styles.books__sort}>
                  <Sorting />
                  <button
                    className={styles.books__filtersIcon}
                    aria-label="open filters"
                    onClick={() => setShowFilters((prev) => !prev)}
                  >
                    <BsFillFilterSquareFill />
                  </button>
                </div>
                {isFetching ? (
                  <>
                    <div className={styles.books__wrapper}>
                      <BookItemSkeleton count={12} slider={false} />
                    </div>
                    <PaginationSkeleton count={7} />
                  </>
                ) : !data?.books.length ? (
                  <div
                    className={`${styles.books__wrapper} ${styles.books__wrapper_empty}`}
                  >
                    <span className={styles.books__warn}>
                      No books for this request
                    </span>
                  </div>
                ) : (
                  <>
                    <div className={styles.books__wrapper}>
                      {data?.books.map((book: any) => (
                        <BookItem shop={true} key={book[0].id} book={book[0]} />
                      ))}
                    </div>
                    <Pagination
                      currentPage={currentPage}
                      countOfPages={Math.ceil(data!.available / BOOKS_ON_PAGE)}
                      handlePageClick={handlePageClick}
                    />
                  </>
                )}
              </section>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Shop;
