import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Book from "../pages/Book/Book";

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
        path: "book/:id",
        element: <Book />,
      },
    ],
  },
]);
