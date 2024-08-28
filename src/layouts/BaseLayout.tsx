import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modal />
    </>
  );
};

export default BaseLayout;
