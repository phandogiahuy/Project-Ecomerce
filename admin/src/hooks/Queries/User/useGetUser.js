import { useQuery } from "react-query";

import { GET_USER } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";

const getUser = async () => {
  const { data } = await AxiosInstance.get(
    `http://localhost:3000/api/user/`
  );
  return data;
};
const useUser = () => useQuery([GET_USER], () => getUser());

export { useUser };
