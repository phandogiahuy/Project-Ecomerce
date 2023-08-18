import axios from "axios";
import { useMutation } from "react-query";

const getUrlMoMo = async ({
  name,
  phone,
  mail,
  address,
  products,
  shipping,
  total,
  payment,
}) => {
  const { data } = await axios.post(
    "https://ecommercecoffee.onrender.com/api/momo",
    {
      name,
      phone,
      mail,
      address,
      products,
      shipping,
      total,
      payment,
    }
  );
  return data;
};

export const useMoMo = () => {
  return useMutation(getUrlMoMo, {
    onSuccess: (urlQrCode) => {
      window.location.href = `${urlQrCode}`;
    },
  });
};
