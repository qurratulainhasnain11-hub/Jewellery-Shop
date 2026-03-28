import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import Contact from "./Pages/Contact";

import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import ProductListing from "./Pages/ProductListing";
import Checkout from "./Pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "listing", element: <ProductListing /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
