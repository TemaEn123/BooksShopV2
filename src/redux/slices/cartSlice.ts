import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import { IBook, IBookWithCountAndPrice } from "../../interfaces/interfaces";

interface IInitialState {
  cart: IBookWithCountAndPrice[];
}

const initialState: IInitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      const currentIndex = state.cart.findIndex(
        (book) => book.id === action.payload.id
      );

      if (currentIndex >= 0) {
        state.cart[currentIndex].count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1, price: 10 });
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const currentIndex = state.cart.findIndex(
        (book) => book.id === action.payload
      );

      if (state.cart[currentIndex].count === 1) {
        state.cart = state.cart.filter((book) => book.id !== action.payload);
      } else {
        state.cart[currentIndex].count -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
