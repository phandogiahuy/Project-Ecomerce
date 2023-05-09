import axios from "axios";
import { useQuery } from "react-query";

import { GET_USER } from "../constant/queryKey";
import { AxiosInstance } from "../requestMethod";

const getUser = async () => {
  const res = await AxiosInstance.get(`http://localhost:3000/api/user/me`);
};
const useUser = () => useQuery([GET_USER], getUser);
export { useUser };
