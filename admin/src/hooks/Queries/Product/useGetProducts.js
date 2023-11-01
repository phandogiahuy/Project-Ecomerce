import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCTS } from "../../../constant/queryKey";

const getProducts = async () => {
  const { data } = await axios.get(`https://ecommercecafe.onrender.com/api/product/`);
  return data;
};
const useGetProducts = () => useQuery([GET_PRODUCTS], getProducts);

export { useGetProducts };
