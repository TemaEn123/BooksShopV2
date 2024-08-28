import TopBlock from "../../components/TopBlock/TopBlock";
import CategoryBooks from "../../components/CategoryBooks/CategoryBooks";

const title = "read and add your insight";
const text = "find your favorite book and read it here for free";

const Home = () => {
  return (
    <>
      <TopBlock title={title} text={text} page="home" />
      <main className="main">
        <div className="container">
          <CategoryBooks title="Classics" genre="classics" />
          <CategoryBooks title="Adventure" genre="adventure" />
          <CategoryBooks title="Thriller" genre="thriller" />
          <CategoryBooks title="Fantasy" genre="fantasy" />
        </div>
      </main>
    </>
  );
};

export default Home;
