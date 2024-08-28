import { memo, useEffect, useState } from "react";

import GenreButton from "../ui/GenreButton/GenreButton";

import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import { GENRES } from "../../constants/constants";

import styles from "./styles.module.scss";

interface Props {
  currentGenre: { category?: string };
}

const Genres = memo(({ currentGenre }: Props) => {
  const [activeGenre, setActiveGenre] = useState<string>("all genres");

  const dispatch = useAppDispatch();

  const handleClickGenre = (title: string) => {
    setActiveGenre(title);
    if (title === "all genres") {
      dispatch(changeFilters({ key: "genres", value: undefined }));
    } else {
      dispatch(changeFilters({ key: "genres", value: title }));
    }
  };

  useEffect(() => {
    if (currentGenre.category) {
      handleClickGenre(currentGenre.category);
    }
  }, []);

  return (
    <div className={styles.genres}>
      <div className={styles.genres__content}>
        {GENRES.map((genre) => (
          <GenreButton
            key={genre}
            title={genre}
            activeGenre={activeGenre}
            handleClickGenre={handleClickGenre}
          />
        ))}
      </div>
    </div>
  );
});

export default Genres;
