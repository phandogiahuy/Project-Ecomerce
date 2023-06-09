import { createBrowserRouter } from "react-router-dom";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ErrorPage from "./pages/Error/defaut-error-page.jsx";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import InforUser from "./pages/InforUser";
import HistoryUser from "./pages/InforUser/HistoryUser";
import InfoUser from "./pages/InforUser/InfoUser";
import OrderUser from "./pages/InforUser/OrderUser";
import LoginProduct from "./pages/Login/Product";
import OrderSuccesful from "./pages/OrderSuccessful";
import ProductList from "./pages/Product/ProductByCategories";
import Product from "./pages/Product/ProductById";
import Register from "./pages/Register/Register";

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
