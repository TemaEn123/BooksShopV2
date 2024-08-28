import { memo } from "react";

import { Link } from "react-router-dom";

import { IArticle } from "../../interfaces/interfaces";

import styles from "./style.module.scss";

interface Props {
  article: IArticle;
}

const BlogItem = memo(({ article }: Props) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogItem__wrapper}>
        <Link to={`./${article.id}`} className={styles.blogItem__img}>
          <img src={article.photo} alt={article.title} />
        </Link>
        <div className={styles.blogItem__text}>
          <Link to={`./${article.id}`}>
            <h4>{article.title}</h4>
          </Link>
          <p>{article.text}</p>
        </div>
      </div>
    </div>
  );
});

export default BlogItem;
