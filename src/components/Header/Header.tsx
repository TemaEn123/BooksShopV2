import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useModal } from "../../context/ModalContext";
import useAuth from "../../helpers/hooks/useAuth";

import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import User from "../User/User";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

import styles from "./styles.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showUser, setShowUser] = useState<boolean>(false);

  document.addEventListener("click", (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).closest(".cart") &&
      !(e.target as HTMLElement).closest(".cart-icon") &&
      showCart
    ) {
      setShowCart(false);
    }
  });

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [showMenu]);

  const { setModal } = useModal();
  const { isAuth } = useAuth();

  const handleClick = () => {
    if (!isAuth) {
      setModal(true);
    } else {
      setShowUser((prev) => !prev);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.header__content} container`}>
        <div className={styles.header__left}>
          <Link className={styles.header__logo} to=".">
            my<span>book</span>
          </Link>
          <button
            aria-label="show cart"
            className={`${styles.header__cart} button-hover`}
            onClick={() => setShowCart((prev) => !prev)}
          >
            <CiShoppingCart className="cart-icon" />
          </button>
          <Cart showCart={showCart} />
        </div>
        <div className={styles.header__right}>
          <Menu setShowMenu={setShowMenu} showMenu={showMenu} isHover />
          <button
            aria-label="login"
            className={`${styles.header__login} button-hover`}
            onClick={handleClick}
          >
            <RiAccountCircleFill className="user-icon" />
          </button>
          <User showUser={showUser} setShowUser={setShowUser} />
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className={styles.header__menuIcon}
          >
            {showMenu ? (
              <IoClose aria-label="close menu" />
            ) : (
              <GiHamburgerMenu aria-label="show menu" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
