import React, { useEffect } from "react";

import { useAppDispatch } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import { TypeOfHandle } from "../../interfaces/interfaces";

import { BOOKS_ON_PAGE } from "../../constants/constants";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const usePagination = ({ currentPage, setCurrentPage }: Props) => {
  const dispatch = useAppDispatch();

  const handlePageClick = (type: TypeOfHandle, page?: number) => {
    if (type === "exact") {
      setCurrentPage(page!);
    }

    if (type === "next") {
      setCurrentPage(currentPage + 1);
    }

    if (type === "prev") {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(changeFilters({ key: "offset", value: undefined }));
    } else {
      dispatch(
        changeFilters({
          key: "offset",
          value: (currentPage - 1) * BOOKS_ON_PAGE,
        })
      );
    }
  }, [currentPage]);

  return { handlePageClick };
};
