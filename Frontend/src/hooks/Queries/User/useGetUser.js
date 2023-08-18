import { useQuery } from "react-query";

import { GET_USER } from "../../../constant/queryKey";
import { axiosInstance } from "../../../Service-api/requestMethod";

const getUser = async () => {
  const { data } = await axiosInstance.get(
    `https://ecommercecoffee.onrender.com/api/user/me`
  );
  return data;
};
const useGetUser = () => useQuery([GET_USER], getUser, {});
export { useGetUser };
