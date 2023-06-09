import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import ProductList from "./pages/Product/ProductByCategories";
import ErrorPage from "./pages/Error/defaut-error-page.jsx";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product/ProductById";
import Checkout from "./pages/Checkout";
import OrderSuccesful from "./pages/OrderSuccessful";

const route = [
  {
    path: "/",
    element: <Home />,
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
    element: <Login />,
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
    // path: "/cart/checkout/successful",
    path: "/cart/checkout/successful/",
    element: <OrderSuccesful />,
  },
];
const routes = route.map((e) => ({ ...e, errorElement: <ErrorPage /> }));
export const router = createBrowserRouter(routes);
