import { Dispatch, SetStateAction } from "react";

import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

interface Props {
  isHover: boolean;
  showMenu?: boolean;
  setShowMenu?: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ isHover, showMenu, setShowMenu }: Props) => {
  return (
    <nav className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
      <ul className={styles.menu__list}>
        <li className={`${styles.menu__item} ${isHover ? styles.hover : ""}`}>
          <NavLink
            onClick={setShowMenu ? () => setShowMenu(false) : () => {}}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="."
          >
            Explorer
          </NavLink>
        </li>
        <li className={`${styles.menu__item} ${isHover ? styles.hover : ""}`}>
          <NavLink
            onClick={setShowMenu ? () => setShowMenu(false) : () => {}}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li className={`${styles.menu__item} ${isHover ? styles.hover : ""}`}>
          <NavLink
            onClick={setShowMenu ? () => setShowMenu(false) : () => {}}
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
