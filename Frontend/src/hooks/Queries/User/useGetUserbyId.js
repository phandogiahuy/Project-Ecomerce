import axios from "axios";
import { useQuery } from "react-query";

import { GET_USER_ID } from "../../../constant/queryKey";

const getUserById = async (id) => {
  const { data } = await axios.get(
    `https://ecommercecoffee.onrender.com/api/user/find/${id}`
  );
  return data;
};
const useGetUsertById = (id) =>
  useQuery([GET_USER_ID, { id }], () => getUserById(id));
export { useGetUsertById };
