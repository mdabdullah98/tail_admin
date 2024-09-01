import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Ecommerce,
  Marketing,
  Crm,
  Analytics,
  Stocks,
  Layout,
} from "../index.imports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <Ecommerce />,
      },
      {
        path: "/dashboard/marketing",
        element: <Marketing />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard/crm",
        element: <Crm />,
      },
      {
        path: "/dashboard/stocks",
        element: <Stocks />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
