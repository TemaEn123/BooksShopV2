import React, { memo, useEffect, useState } from "react";

import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import { useRangeChange } from "../../helpers/hooks/useRangeChange";

import Genres from "../Genres/Genres";
import SortRating from "../SortRating/SortRating";
import FiltersTitle from "../ui/FiltersTitle/FiltersTitle";
import Search from "../Search/Search";
import { IoMdClose } from "react-icons/io";

import {
  MAX_RATING,
  MAX_YEAR,
  MIN_RATING,
  MIN_YEAR,
} from "../../constants/constants";

import styles from "./styles.module.scss";

interface Props {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  currentGenre: { category?: string };
}

const Filters = memo(({ showFilters, setShowFilters, currentGenre }: Props) => {
  const [ratingValue, setRatingValue] = useState<[number, number]>([
    4,
    MAX_RATING,
  ]);

  const [yearsValue, setYearsValue] = useState<[number, number]>([
    1950,
    MAX_YEAR,
  ]);

  const dispatch = useAppDispatch();

  const { handleRatingChange, handleYearsChange } = useRangeChange({
    setRatingValue,
    ratingValue,
    setYearsValue,
    yearsValue,
  });

  const handleSearch = (debouncedSearch: string | undefined) => {
    dispatch(changeFilters({ key: "authors", value: debouncedSearch }));
  };

  useEffect(() => {
    if (showFilters) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [showFilters]);

  return (
    <aside className={`${styles.filters} ${showFilters ? styles.show : ""}`}>
      <button
        onClick={() => setShowFilters(false)}
        className={styles.filters__show}
        aria-label="close filters"
      >
        <IoMdClose />
      </button>
      <div className={styles.filters__content}>
        <div className={styles.filters__item}>
          <FiltersTitle title="Books by Genre" />
          <Genres currentGenre={currentGenre} />
        </div>
        <div className={styles.filters__item}>
          <FiltersTitle title="by Author" />
          <Search
            type="author"
            placeholder="Search Author"
            handleSearch={handleSearch}
          />
        </div>
        <div className={styles.filters__item}>
          <FiltersTitle title="by Rating" />
          <SortRating
            value={ratingValue}
            handleChange={handleRatingChange}
            setValue={setRatingValue}
            min={MIN_RATING}
            max={MAX_RATING}
          />
        </div>
        <div className={styles.filters__item}>
          <FiltersTitle title="by Years" />
          <SortRating
            value={yearsValue}
            handleChange={handleYearsChange}
            setValue={setYearsValue}
            min={MIN_YEAR}
            max={MAX_YEAR}
          />
        </div>
      </div>
    </aside>
  );
});

export default Filters;
