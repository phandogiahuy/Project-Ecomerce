import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
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
        path: "/newProduct",
        element: <NewProduct />,
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
  </QueryClientProvider>,
  document.getElementById("root")
);
