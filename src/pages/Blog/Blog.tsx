import TopBlock from "../../components/TopBlock/TopBlock";

import styles from "./styles.module.scss";

const title = "blog mybook";
const text =
  "lightweight article where discussing matters relating to the book";

const Blog = () => {
  return (
    <>
      <TopBlock title={title} text={text} page="blog" />
      <main className="main"></main>
    </>
  );
};

export default Blog;
