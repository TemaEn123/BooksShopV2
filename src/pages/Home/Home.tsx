import { useEffect } from "react";

import TopBlock from "../../components/TopBlock/TopBlock";

import styles from "./styles.module.scss";

const title = "read and add your insight";
const text = "find your favorite book and read it here for free";

const BASE_URL = import.meta.env.VITE_BOOKS_BASE_API;
const API_KEY = import.meta.env.VITE_BOOKS_API_KEY;

const Home = () => {
  useEffect(() => {
    const params = new URLSearchParams({
      ["api-key"]: API_KEY,
      ["min-rating"]: "0",
      ["max-rating"]: "1",
    }).toString();

    fetch(`${BASE_URL}/search-books?${params}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <TopBlock title={title} text={text} page="home" />
      <main className="main">
        <div className="container"></div>
      </main>
    </>
  );
};

export default Home;
