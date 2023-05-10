import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { GET_PRODUCTS } from "../constant/queryKey";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../requestMethods";

const getProducts = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/product/`);
  return data;
};
const useProducts = () => useQuery([GET_PRODUCTS], getProducts);

const postProducts = async ({ title, categories, description, price, img }) => {
  const { data } = await AxiosInstance.post(
    `http://localhost:3000/api/product/`,
    { title, categories, description, price, img }
  );
  return data;
};
const useGetProducts = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(postProducts, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries([GET_PRODUCTS]);
      navigate("/product");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};

export { useProducts, useGetProducts };
