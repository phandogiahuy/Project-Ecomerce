import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCTS_COMMENT } from "../../../constant/queryKey";

const getProducts = async () => {
  const { data } = await axios.get(`localhost:3000/api/product/comment`);
  return data;
};
const useGetProductComment = () =>
  useQuery([GET_PRODUCTS_COMMENT], getProducts);

export { useGetProductComment };
