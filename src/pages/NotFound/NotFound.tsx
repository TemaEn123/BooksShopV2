import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section>404</section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
