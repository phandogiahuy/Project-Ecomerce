import { useQuery } from "react-query";

import { GET_NEW_USER } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const getNewUser = async () => {
  const { data } = await AxiosInstance.get(`localhost:3000/api/user?new=true`);
  return data;
};
const useGetNewUser = () => useQuery([GET_NEW_USER], () => getNewUser());

export { useGetNewUser };
