import axios from "axios";
import { useQuery } from "react-query";

import { GET_PRODUCT_CAT } from "../../../constant/queryKey";

const getProductByCat = async (cat, sort) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/product`,
    {
      params: {
        category: cat,
        sort,
      },
    }
  );

  return data;
};
const useGetProductByCat = (cat, sort) =>
  useQuery([GET_PRODUCT_CAT, { cat, sort }], () => getProductByCat(cat, sort));
export { useGetProductByCat };
