import { useState } from "react";

import GenreButton from "../ui/GenreButton/GenreButton";

import { GENRES } from "../../constants/constants";

import styles from "./styles.module.scss";

const Genres = () => {
  const [activeGenre, setActiveGenre] = useState<string>("all genres");

  return (
    <div className={styles.genres}>
      <div className={styles.genres__content}>
        {GENRES.map((genre) => (
          <GenreButton
            key={genre}
            title={genre}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        ))}
      </div>
    </div>
  );
};

export default Genres;
