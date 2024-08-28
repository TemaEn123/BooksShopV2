import { useEffect } from "react";

import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import {
  MAX_RATING,
  MAX_YEAR,
  MIN_RATING,
  MIN_YEAR,
} from "../../constants/constants";

interface Props {
  setRatingValue: React.Dispatch<React.SetStateAction<[number, number]>>;
  setYearsValue: React.Dispatch<React.SetStateAction<[number, number]>>;
  ratingValue: [number, number];
  yearsValue: [number, number];
}

export const useRangeChange = ({
  setRatingValue,
  ratingValue,
  setYearsValue,
  yearsValue,
}: Props) => {
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    if (
      ratingValue[0] >= MIN_RATING &&
      ratingValue[0] <= MAX_RATING &&
      ratingValue[1] <= MAX_RATING &&
      ratingValue[1] >= MIN_RATING
    ) {
      const handler = setTimeout(() => {
        dispatch(
          changeFilters({ key: "min-rating", value: ratingValue[0] / 5 })
        );
        dispatch(
          changeFilters({ key: "max-rating", value: ratingValue[1] / 5 })
        );
      }, 1000);

      return () => clearTimeout(handler);
    }
  }, [ratingValue]);

  const handleYearsChange = (type: "from" | "to", value: number) => {
    if (type === "from") {
      if (value < MIN_YEAR) setYearsValue([MIN_YEAR, yearsValue[1]]);
      if (value > yearsValue[1]) setYearsValue([yearsValue[1], yearsValue[1]]);
    } else {
      if (value < yearsValue[0]) setYearsValue([yearsValue[0], yearsValue[0]]);
      if (value > MAX_YEAR) setYearsValue([yearsValue[0], MAX_YEAR]);
    }
  };

  useEffect(() => {
    if (
      yearsValue[0] >= MIN_YEAR &&
      yearsValue[0] <= MAX_YEAR &&
      yearsValue[1] <= MAX_YEAR &&
      yearsValue[1] >= MIN_YEAR
    ) {
      const handler = setTimeout(() => {
        dispatch(
          changeFilters({ key: "earliest-publish-year", value: yearsValue[0] })
        );
        dispatch(
          changeFilters({ key: "latest-publish-year", value: yearsValue[1] })
        );
      }, 1000);

      return () => clearTimeout(handler);
    }
  }, [yearsValue]);

  return { handleRatingChange, handleYearsChange };
};
