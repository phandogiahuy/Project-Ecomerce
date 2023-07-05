import { message } from "antd";
import axios from "axios";
import { useMutation } from "react-query";

export const getDiscount = async ({ code }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/discount/find/${code}`
  );
  return data;
};
const useGetDiscountByCode = () =>
  useMutation(getDiscount, {
    onError(error) {
      message.error(error.response.data.message);
    },
  });
export { useGetDiscountByCode };

// export const useQuery = (fn, deps) => {
//   const [state, setState] = useReducer(
//     (oldState, newState) => {
//       return { ...oldState, ...newState };
//     },
//     { isLoading: null, data: null, isError: null, error: null }
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setState({ isLoading: true });
//         const data = await fn(deps);
//         setState({ isLoading: false, data });
//       } catch (error) {
//         setState({ isError: true, error, isLoading: false });
//       }
//     };
//     fetchData();
//   }, deps);
//   return state;
// };
