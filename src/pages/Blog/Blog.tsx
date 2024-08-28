import BlogItem from "../../components/BlogItem/BlogItem";
import BlogItemSkeleton from "../../components/BlogItemSkeleton/BlogItemSkeleton";
import TopBlock from "../../components/TopBlock/TopBlock";
import Error from "../../components/ui/Error/Error";

import { useGetArticlesQuery } from "../../redux/services/articlesApi";

import styles from "./styles.module.scss";

const title = "blog mybook";
const text =
  "lightweight article where discussing matters relating to the book";

const Blog = () => {
  const { data, error, isLoading } = useGetArticlesQuery(null);

  return (
    <>
      <TopBlock title={title} text={text} page="blog" />
      <main className="main">
        <div className="container">
          {error ? (
            <Error />
          ) : (
            <section className={styles.blog}>
              {isLoading ? (
                <BlogItemSkeleton count={6} />
              ) : (
                data?.map((article) => (
                  <BlogItem key={article.id} article={article} />
                ))
              )}
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default Blog;
