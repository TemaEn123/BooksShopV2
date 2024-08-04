import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";

import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [showMenu]);

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
          >
            <CiShoppingCart />
          </button>
        </div>
        <div className={styles.header__right}>
          <Menu setShowMenu={setShowMenu} showMenu={showMenu} isHover />
          <button
            aria-label="login"
            className={`${styles.header__login} button-hover`}
          >
            <span>Log in</span>
            <RiAccountCircleFill />
          </button>
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
