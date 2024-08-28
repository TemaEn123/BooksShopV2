export type IGenres =
  | "adventure"
  | "poetry"
  | "biography"
  | "business"
  | "classics"
  | "romance"
  | "thriller"
  | "fantasy"
  | "fiction"
  | "nonfiction"
  | "novel";

export interface BookByGenre {
  genres: string[];
  id: number;
  image: string;
  rating: { average: number };
  title: string;
}

export interface BookByFilters {
  id: number;
  image: string;
  title: string;
  authors?: [{ id: number; name: string }];
  genres?: string[];
  ["publish_date"]: number;
  rating: { average: number };
}

export interface IBook {
  id: number;
  image: string;
  title: string;
}

export interface IBookWithCountAndPrice extends IBook {
  count: number;
  price: number;
}

export interface IFilters {
  genres?: IGenres;
  authors?: string;
  ["earliest-publish-year"]?: number;
  ["latest-publish-year"]?: number;
  ["min-rating"]?: number;
  ["max-rating"]?: number;
  sort?: "publish-date" | "rating";
  ["sort-direction"]?: "DESC" | "ASC";
  offset?: number;
  number?: number;
}

export interface IArticle {
  id: string;
  title: string;
  photo: string;
  text: string;
}

export interface ISelectOptions {
  value: undefined | string;
  label: string;
  sort: undefined | string;
}

export type TypeOfHandle = "exact" | "next" | "prev";

export interface IBookById {
  authors: [{ id: number; name: string }];
  id: number;
  image: string;
  description: string;
  number_of_pages: number;
  publish_date: number;
  title: string;
  rating: { average: number };
}

export interface ISimilarBooks {
  similar_books: IBook[];
}
