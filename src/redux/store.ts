import { useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import filtersSlice from "./slices/filtersSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import { booksApi } from "./services/booksApi";
import { articlesApi } from "./services/articlesApi";

import { persistStore, persistReducer, WebStorage } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface IPersistConfig {
  key: string;
  storage: WebStorage;
  blacklist?: string[];
}

const rootPersistConfig: IPersistConfig = {
  key: "root",
  storage,
  blacklist: ["filters"],
};

const filtersPersistConfig: IPersistConfig = {
  key: "filters",
  storage,
  blacklist: ["filters"],
};

const rootReducer = combineReducers({
  filters: persistReducer(filtersPersistConfig, filtersSlice),
  cart: cartSlice,
  user: userSlice,
  [booksApi.reducerPath]: booksApi.reducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }).concat(booksApi.middleware, articlesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
