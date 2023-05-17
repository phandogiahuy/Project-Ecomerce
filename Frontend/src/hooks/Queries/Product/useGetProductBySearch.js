import axios from "axios";
import { useQuery } from "react-query";

import { GET_SEARCH_PRODUCT } from "../../../constant/queryKey";
import { debounce, throttle } from "lodash";

const searchQuery = async (debouncedQuery) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/product?title=${debouncedQuery}`
  );
  return data;
};

const useGetProductBySearch = (debouncedQuery) =>
  useQuery([GET_SEARCH_PRODUCT, { debouncedQuery }], () =>
    searchQuery(debouncedQuery)
  );
export { useGetProductBySearch };
