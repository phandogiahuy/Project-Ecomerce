import axios from "axios";
import { useQuery } from "react-query";

import { GET_ALL_PRODUCT } from "../../../constant/queryKey";

const getProducts = async () => {
  const { data } = await axios.get(
    `https://ecommercecoffee.onrender.com/api/product/all`
  );
  return data;
};
const useGetAllProducts = () => useQuery(GET_ALL_PRODUCT, () => getProducts());
export { useGetAllProducts };
