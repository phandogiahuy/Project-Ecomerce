import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCTS } from "../../../constant/queryKey";

const getProducts = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/product/`);
  return data;
};
const useGetProducts = () => useQuery([GET_PRODUCTS], getProducts);

export { useGetProducts };
