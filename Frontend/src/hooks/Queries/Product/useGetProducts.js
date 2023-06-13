import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCTS } from "../../../constant/queryKey";

const getProducts = async ({ pageSize, page }) => {
  const { data } = await axios.get(`http://localhost:3000/api/product`, {
    params: {
      pageSize,
      page,
    },
  });
  console.log("🚀 ~ file: useGetProducts.js:9 ~ getProducts ~ data:", data);
  return data;
};
const useGetProducts = ({ pageSize, page }) =>
  useQuery([GET_PRODUCTS, { pageSize, page }], () =>
    getProducts({ pageSize, page })
  );
export { useGetProducts };
