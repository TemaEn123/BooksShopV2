import { useNavigate, useParams } from "react-router-dom";

import {
  useGetBookByIdQuery,
  useGetSimilarBooksQuery,
} from "../../redux/services/booksApi";

import TopBlock from "../../components/TopBlock/TopBlock";
import Rating from "../../components/Rating/Rating";
import BuyButton from "../../components/BuyButton/BuyButton";
import SimilarBooks from "../../components/SimilarBooks/SimilarBooks";
import BookSkeleton from "../../components/BookSkeleton/BookSkeleton";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./styles.module.scss";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetBookByIdQuery(Number(params.id));
  const {
    data: similarBooks,
    error: errorSimilarBooks,
    isLoading: isLoadingSimilarBooks,
  } = useGetSimilarBooksQuery(Number(params.id));

  if (error || errorSimilarBooks) throw new Error("Not Found");

  return (
    <>
      <TopBlock page="single" />
      <div className="main">
        <div className="container">
          <section className={styles.bookPage}>
            {isLoading || isLoadingSimilarBooks ? (
              <BookSkeleton />
            ) : (
              <>
                <div className={styles.bookPage__book}>
                  <div className={styles.bookPage__top}>
                    <button
                      onClick={() => navigate("..", { relative: "path" })}
                      className={styles.bookPage__arrow}
                      aria-label="previous page"
                    >
                      <FaArrowLeft />
                    </button>
                    <div className={styles.bookPage__img}>
                      <img src={data?.image} alt={data?.title} />
                    </div>
                    <div className={styles.bookPage__info}>
                      <h1>{data?.title}</h1>
                      <span>{data?.authors[0].name}</span>
                      <div className={styles.bookPage__rating}>
                        <Rating book rating={data!.rating.average} />
                      </div>
                      <BuyButton book={data!} />
                    </div>
                  </div>
                  <div className={styles.bookPage__about}>
                    <h3>Description:</h3>
                    <p>{data?.description}</p>
                    <h3>Info:</h3>
                    <div className={styles.bookPage__point}>
                      Publish Date: <span>{data?.publish_date}</span>
                    </div>
                    <div className={styles.bookPage__point}>
                      Number Of Pages: <span>{data?.number_of_pages}</span>
                    </div>
                  </div>
                </div>
                <SimilarBooks books={similarBooks} />
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Book;
