import axios from "axios";
import { useQuery } from "react-query";

import { GET_SEARCH_PRODUCT } from "../../../constant/queryKey";

const searchQuery = async (debouncedQuery) => {
  const { data } = await axios.get(
    `https://ecommercecafe.onrender.com/api/product?title=${debouncedQuery}`
  );
  return data;
};

const useGetProductBySearch = (debouncedQuery) =>
  useQuery([GET_SEARCH_PRODUCT, { debouncedQuery }], () =>
    searchQuery(debouncedQuery)
  );
export { useGetProductBySearch };
