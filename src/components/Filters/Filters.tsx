import { useState } from "react";

import Genres from "../Genres/Genres";
import SortRating from "../SortRating/SortRating";
import FiltersTitle from "../ui/FiltersTitle/FiltersTitle";

import {
  MAX_RATING,
  MAX_YEAR,
  MIN_RATING,
  MIN_YEAR,
} from "../../constants/constants";

import styles from "./styles.module.scss";
import Search from "../Search/Search";

const Filters = () => {
  const [ratingValue, setRatingValue] = useState<[number, number]>([2, 5]);
  const [yearsValue, setYearsValue] = useState<[number, number]>([1700, 2024]);

  const handleRatingChange = (type: "from" | "to", value: number) => {
    if (type === "from") {
      if (value < MIN_RATING) setRatingValue([MIN_RATING, ratingValue[1]]);
      if (value > ratingValue[1])
        setRatingValue([ratingValue[1], ratingValue[1]]);
    } else {
      if (value < ratingValue[0])
        setRatingValue([ratingValue[0], ratingValue[0]]);
      if (value > MAX_RATING) setRatingValue([ratingValue[0], MAX_RATING]);
    }
  };

  const handleYearsChange = (type: "from" | "to", value: number) => {
    if (type === "from") {
      if (value < MIN_YEAR) setYearsValue([MIN_YEAR, yearsValue[1]]);
      if (value > yearsValue[1]) setYearsValue([yearsValue[1], yearsValue[1]]);
    } else {
      if (value < yearsValue[0]) setYearsValue([yearsValue[0], yearsValue[0]]);
      if (value > MAX_RATING) setYearsValue([yearsValue[0], MAX_YEAR]);
    }
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.filters__content}>
        <div className={styles.filters__item}>
          <FiltersTitle title="Books by Genre" />
          <Genres />
        </div>
        <div className={styles.filters__item}>
          <FiltersTitle title="by Author" />
          <Search type="author" placeholder="Search Author" />
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
};

export default Filters;
