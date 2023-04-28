import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./error-page";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:categories",
    element: <ProductList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
