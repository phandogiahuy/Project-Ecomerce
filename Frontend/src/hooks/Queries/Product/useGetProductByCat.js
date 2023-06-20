import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCT_CAT } from "../../../constant/queryKey";

const getProductByCat = async (cat) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/product?category=${cat}`
  );

  return data;
};
const useGetProductByCat = (cat) =>
  useQuery([GET_PRODUCT_CAT, { cat }], () => getProductByCat(cat));
export { useGetProductByCat };
