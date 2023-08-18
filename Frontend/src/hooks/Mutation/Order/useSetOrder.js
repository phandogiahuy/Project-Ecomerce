import { message } from "antd";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const order = async ({
  name,
  phone,
  mail,
  address,
  products,
  shipping,
  total,
  payment,
  userId,
}) => {
  const res = await axios.post("localhost:3000/api/order/", {
    name,
    phone,
    mail,
    products,
    shipping,
    address,
    total,
    payment,
    userId,
  });
  return res.data;
};

export const useSetOrder = () => {
  const navigate = useNavigate();
  return useMutation(order, {
    onSuccess: () => {
      message.success("You ordered successfully");
      // navigate(`/cart/checkout/successful?data=${JSON.stringify(data)}`);
      navigate(`/cart/checkout/successful/`);
    },
    onError: (e) => {
      message.error(e.response.data);
    },
  });
};
