import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { IFilters } from "../../interfaces/interfaces";

import { BOOKS_ON_PAGE, MAX_YEAR, MIN_YEAR } from "../../constants/constants";

interface IChangeFilter {
  key: string;
  value: string | number | undefined;
}

interface IInitialState {
  filters: IFilters;
  title: string | undefined;
}

const initialState: IInitialState = {
  filters: {
    genres: undefined,
    authors: undefined,
    ["earliest-publish-year"]: MIN_YEAR,
    ["latest-publish-year"]: MAX_YEAR,
    ["min-rating"]: 0,
    ["max-rating"]: 0.99,
    sort: undefined,
    ["sort-direction"]: undefined,
    offset: undefined,
    number: BOOKS_ON_PAGE,
  },
  title: undefined,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<IChangeFilter>) => {
      state.filters = {
        ...state.filters,
        [action.payload.key]: action.payload.value,
      };
    },
    changeTitle: (state, action: PayloadAction<string | undefined>) => {
      state.title = action.payload;
    },
  },
});

export const { changeFilters, changeTitle } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectTitle = (state: RootState) => state.filters.title;

export default filtersSlice.reducer;
