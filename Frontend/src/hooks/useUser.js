import axios from "axios";
import { useQuery } from "react-query";

import { GET_USER } from "../constant/queryKey";
import {  axiosInstance } from "../api/requestMethod";

const getUser = async () => {
  const res = await axiosInstance.get(`http://localhost:3000/api/user/me`);
};
const useUser = () => useQuery([GET_USER], getUser);
export { useUser };
