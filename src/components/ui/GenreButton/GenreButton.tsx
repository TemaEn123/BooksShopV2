import { memo } from "react";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  activeGenre: string;
  handleClickGenre: (title: string) => void;
}

const GenreButton = memo(({ title, activeGenre, handleClickGenre }: Props) => {
  return (
    <button
      onClick={() => handleClickGenre(title)}
      className={`${styles.genre} ${
        activeGenre === title ? styles.active : ""
      }`}
    >
      {title}
    </button>
  );
});

export default GenreButton;
