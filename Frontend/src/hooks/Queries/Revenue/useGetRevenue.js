import axios from "axios";
import { useQuery } from "react-query";

import { GET_REVENUE } from "../../../constant/queryKey";

const getRevenue = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/revenue`);
  return data;
};
const useGetRevenue = () => useQuery([GET_REVENUE], () => getRevenue());
export { useGetRevenue };
