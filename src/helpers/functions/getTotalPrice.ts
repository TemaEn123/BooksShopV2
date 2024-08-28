import { IBookWithCountAndPrice } from "../../interfaces/interfaces";

export const getTotalPrice = (cart: IBookWithCountAndPrice[]) => {
  return cart.reduce((sum, book) => sum + book.price * book.count, 0);
};
