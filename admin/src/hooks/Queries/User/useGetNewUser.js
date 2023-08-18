import { useQuery } from "react-query";

import { GET_NEW_USER } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const getNewUser = async () => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecoffee.onrender.com/api/user?new=true`
  );
  return data;
};
const useGetNewUser = () => useQuery([GET_NEW_USER], () => getNewUser());

export { useGetNewUser };
