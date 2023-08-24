import { createBrowserRouter } from "react-router-dom";

import Cart from "../src/pages/Cart/Index";
import ErrorPage from "../src/pages/Error/Index.jsx";
import Favorite from "../src/pages/Favorite/Index";
import Home from "../src/pages/Home/Index";
import InforUser from "../src/pages/InforUser/Index";
import HistoryUser from "../src/pages/InforUser/HistoryUser/Index";
import InfoUser from "../src/pages/InforUser/InfoUser/Index";
import OrderUser from "../src/pages/InforUser/OrderUser/Index";
import LoginProduct from "../src/pages/Login/Product/Index";
import OrderSuccesful from "../src/pages/OrderSuccessful/Index";
import ProductList from "../src/pages/Product/ProductByCategories/Index";
import Product from "../src/pages/Product/ProductById/Index";
import Register from "../src/pages/Register/Index";
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
