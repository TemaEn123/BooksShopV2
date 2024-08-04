import TopBlock from "../../components/TopBlock/TopBlock";
import Filters from "../../components/Filters/Filters";

import styles from "./styles.module.scss";

const title = "appreciate your author's work";
const text = "find your favorite book and read it here for free";

const Shop = () => {
  return (
    <>
      <TopBlock title={title} text={text} page="shop" />
      <main className="main">
        <div className="container">
          <Filters />
        </div>
      </main>
    </>
  );
};

export default Shop;
