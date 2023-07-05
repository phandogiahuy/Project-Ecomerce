import axios from "axios";
import { useEffect, useReducer } from "react";

export const getCoupon = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/discount/`);
  return data;
};
// const useGetCoupon = () => useQuery([GET_COUPON], getCoupon);
export const useQuery = (fn, deps) => {
  const [state, setState] = useReducer(
    (oldState, newState) => {
      return { ...oldState, ...newState };
    },
    { isLoading: true, data: null, isError: null, error: null }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ isLoading: true });
        const data = await fn();
        setState({ isLoading: false, data });
      } catch (error) {
        setState({ isError: true, error, isLoading: false });
      }
    };
    fetchData();
  }, deps);
  return state;
};
