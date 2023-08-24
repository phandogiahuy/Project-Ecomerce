import { createBrowserRouter } from "react-router-dom";

import Cart from "../src/pages/Cart";
import ErrorPage from "../src/pages/Error";
import Favorite from "../src/pages/Favorite";
import Home from "../src/pages/Home";
import InforUser from "../src/pages/InforUser";
import HistoryUser from "../src/pages/InforUser/HistoryUser";
import InfoUser from "../src/pages/InforUser/InfoUser";
import OrderUser from "../src/pages/InforUser/OrderUser";
import LoginProduct from "../src/pages/Login/Product";
import OrderSuccesful from "../src/pages/OrderSuccessful";
import ProductList from "../src/pages/Product/ProductByCategories";
import Product from "../src/pages/Product/ProductById";
import Register from "../src/pages/Register";
import Checkout from "../src/pages/Checkout";

const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/products/:cat",
    element: <ProductList />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <LoginProduct />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart/checkout",
    element: <Checkout />,
  },
  {
    path: "/user/:userId",
    element: <InforUser />,
    children: [
      {
        path: "order",
        element: <OrderUser />,
      },
      {
        path: "history",
        element: <HistoryUser />,
      },
      {
        path: "info",
        element: <InfoUser />,
      },
    ],
  },
  {
    // path: "/cart/checkout/successful",
    path: "/cart/checkout/successful/",
    element: <OrderSuccesful />,
  },
];
const routes = route.map((e) => ({ ...e, errorElement: <ErrorPage /> }));
export const router = createBrowserRouter(routes);
