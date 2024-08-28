import { useNavigate, useParams } from "react-router-dom";

import { useGetArticleByIdQuery } from "../../redux/services/articlesApi";

import ArticleSkeleton from "../../components/ArticleSkeleton/ArticleSkeleton";
import TopBlock from "../../components/TopBlock/TopBlock";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./style.module.scss";

const Article = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetArticleByIdQuery(params.id);

  if (error) throw new Error("Not Found");

  return (
    <>
      <TopBlock page="single" />
      <div className="main">
        <div className="container">
          <section className={styles.article}>
            {isLoading ? (
              <ArticleSkeleton />
            ) : (
              <>
                <div className={styles.article__img}>
                  <button
                    onClick={() => navigate("/blog")}
                    className={styles.article__arrow}
                    aria-label="previous page"
                  >
                    <FaArrowLeft />
                  </button>
                  <img src={data?.photo} alt={data?.title} />
                </div>
                <div className={styles.article__text}>
                  <h1>{data?.title}</h1>
                  <p>{data?.text}</p>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Article;
