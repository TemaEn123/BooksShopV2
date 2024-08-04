import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  activeGenre: string;
  setActiveGenre: React.Dispatch<React.SetStateAction<string>>;
}

const GenreButton = ({ title, activeGenre, setActiveGenre }: Props) => {
  return (
    <button
      onClick={() => setActiveGenre(title)}
      className={`${styles.genre} ${
        activeGenre === title ? styles.active : ""
      }`}
    >
      {title}
    </button>
  );
};

export default GenreButton;
