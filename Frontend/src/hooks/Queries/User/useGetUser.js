import axios from "axios";
import { useQuery } from "react-query";

import { GET_USER } from "../../../constant/queryKey";
import { axiosInstance } from "../../../Service-api/requestMethod";

const getUser = async () => {
  const res = await axiosInstance.get(`http://localhost:3000/api/user/me`);
};
const useGetUser = () => useQuery([GET_USER], getUser);
export { useGetUser };