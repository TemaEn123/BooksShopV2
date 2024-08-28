import { ISelectOptions } from "../interfaces/interfaces";

export const GENRES: string[] = [
  "all genres",
  "adventure",
  "poetry",
  "biography",
  "business",
  "classics",
  "romance",
  "thriller",
  "fantasy",
  "fiction",
  "nonfiction",
  "novel",
];

export const MIN_RATING: number = 1;
export const MAX_RATING: number = 5;

export const MIN_YEAR: number = 1700;
export const MAX_YEAR: number = new Date().getFullYear();

export const BOOKS_ON_PAGE: number = 12;

export const selectOptions: ISelectOptions[] = [
  { value: undefined, label: "Featured", sort: undefined },
  { value: "publish-date", label: "Date: New to Old", sort: "DESC" },
  { value: "publish-date", label: "Date: Old to New", sort: "ASC" },
  { value: "rating", label: "Rating: High to Low", sort: "DESC" },
  { value: "rating", label: "Rating: Low to High", sort: "ASC" },
];

export const BOOKS = [
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
  {
    id: 21023970,
    image: "https://covers.openlibrary.org/b/id/2520431-M.jpg",
    rating: { average: 0.8939999938011169 },
    subtitle: "Coloring Book",
    title: "Heroes and Villains",
  },
];
