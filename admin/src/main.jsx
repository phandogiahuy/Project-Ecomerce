import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/error-page";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import EditProduct from "./pages/product/editProduct";
import DiscountList from "./pages/discount/DiscountList";
import EditDiscount from "./pages/discount/EditDiscount";
import NewDiscount from "./pages/discount/NewDiscount";
import { ReactQueryDevtools } from "react-query/devtools";
import Comment from "./pages/comment/Comment";

const queryClient = new QueryClient();
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
