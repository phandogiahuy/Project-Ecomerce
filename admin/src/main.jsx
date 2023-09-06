import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import UserList from "./pages/userList";
import ErrorPage from "./pages/error";
import ProductList from "./pages/productList";
import NewProduct from "./pages/newProduct";
import EditProduct from "./pages/product/Edit";
import DiscountList from "./pages/Discounts";

import Comment from "./pages/Comments";
import { ReactQueryDevtools } from "react-query/devtools";
import NewDiscount from "./pages/Discounts/Create";
import EditDiscount from "./pages/Discounts/Edit";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <UserList />,
      },
      {
        path: "/product",
        element: <ProductList />,
      },
      {
        path: "/discount",
        element: <DiscountList />,
      },
      {
        path: "/newDiscount",
        element: <NewDiscount />,
      },
      {
        path: "/discount/edit/:_id",
        element: <EditDiscount />,
      },
      {
        path: "/newProduct",
        element: <NewProduct />,
      },
      {
        path: "/product/edit/:_id",
        element: <EditProduct />,
      },
      {
        path: "/comment",
        element: <Comment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
