import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Book from "../pages/Book/Book";
import Article from "../pages/Article/Article";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <Article />,
      },
      {
        path: "shop/:id",
        element: <Book />,
      },
    ],
  },
]);
