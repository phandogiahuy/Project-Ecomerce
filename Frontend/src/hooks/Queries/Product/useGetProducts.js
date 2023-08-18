import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCTS } from "../../../constant/queryKey";

const getProducts = async ({ pageSize, page }) => {
  const { data } = await axios.get(`localhost:3000/api/product`, {
    params: {
      pageSize,
      page,
    },
  });
  return data;
};
const useGetProducts = ({ pageSize, page }) =>
  useQuery([GET_PRODUCTS, { pageSize, page }], () =>
    getProducts({ pageSize, page })
  );
export { useGetProducts };
