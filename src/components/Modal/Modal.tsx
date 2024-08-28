import { useEffect, useState } from "react";

import { useModal } from "../../context/ModalContext";
import useAuth from "../../helpers/hooks/useAuth";

import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import { IoMdClose } from "react-icons/io";

import styles from "./style.module.scss";

const Modal = () => {
  const [signUp, setSignUp] = useState<boolean>(true);

  const { modal, setModal } = useModal();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      setModal(false);
    }
    if (modal) {
      document.body.classList.add("modalLock");
    } else {
      document.body.classList.remove("modalLock");
    }
  }, [modal, isAuth]);

  return (
    <div className={`${styles.modal} ${modal ? styles.show : ""}`}>
      <div className={styles.modal__content}>
        <button
          aria-label="close"
          className={styles.modal__close}
          onClick={() => setModal(false)}
        >
          <IoMdClose />
        </button>
        <h2>{signUp ? "Register" : "Login"}</h2>
        {signUp ? <SignUp /> : <Login />}
        <p>
          {signUp ? "Already have an account?" : "Don't have an account yet?"}
          <button
            onClick={() => setSignUp((prev) => !prev)}
            aria-label="sign up"
          >
            {signUp ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
