import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="main" style={{ display: "flex" }}>
        <section className={styles.notFound}>404</section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
