import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { message } from "antd";
import {
  GET_DISCOUNT,
  GET_DISCOUNT_ID,
  POST_DISCOUNT,
} from "../../constant/queryKey";
import { AxiosInstance } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
const deleteDiscountById = async (id) => {
  const res = await AxiosInstance.delete(
    `http://localhost:3000/api/discount/${id}`
  );
  return res.data;
};
const useDeleteDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteDiscountById, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT]);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
const edit = async ({ values, id }) => {
  const { data } = await AxiosInstance.put(
    `http://localhost:3000/api/discount/${id}`,
    { ...values }
  );

  return data;
};
const getDiscountById = async (id) => {
  const { data } = await AxiosInstance.get(
    `http://localhost:3000/api/discount/${id}`
  );
  return data;
};
const useDiscountById = (id) =>
  useQuery([GET_DISCOUNT_ID, { id }], () => getDiscountById(id));
const useEditDiscountById = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(edit, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT_ID]);
      navigate("/discount");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
const post = async ({ code, sale, limit }) => {
  const { data } = await AxiosInstance.post(
    `http://localhost:3000/api/discount/`,
    { code, sale, limit }
  );

  return data;
};
const usePostDiscount = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(post, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([GET_DISCOUNT]);
      navigate("/discount");
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
export {
  useDeleteDiscount,
  useEditDiscountById,
  useDiscountById,
  usePostDiscount,
};
