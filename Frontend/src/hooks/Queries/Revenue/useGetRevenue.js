import axios from "axios";
import { useQuery } from "react-query";

import { GET_REVENUE } from "../../../constant/queryKey";

const getRevenue = async () => {
  const { data } = await axios.get(
    `https://ecommercecoffee.onrender.com/api/revenue`
  );
  return data;
};
const useGetRevenue = () => useQuery([GET_REVENUE], () => getRevenue());
export { useGetRevenue };
