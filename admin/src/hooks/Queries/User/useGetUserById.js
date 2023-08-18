import { GET_USER_ID } from "../../../constant/queryKey";
import { AxiosInstance } from "../../../service-api/requestMethods";
import { useQuery } from "react-query";

const getUserById = async (id) => {
  const { data } = await AxiosInstance.get(
    `https://ecommercecoffee.onrender.com/api/user/find/${id}`
  );
  return data;
};
const useGetUsertById = (id) =>
  useQuery([GET_USER_ID, { id }], () => getUserById(id));
export { useGetUsertById };
