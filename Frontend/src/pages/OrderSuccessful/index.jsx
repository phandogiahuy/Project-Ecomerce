import { Card, Result } from "antd";
import React from "react";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import MySteps from "../../components/Steps";
import { GET_USER } from "../../constant/queryKey";
import { clearCart } from "../../reduxToolkit/cartRedux";

const OrderSuccesful = () => {
  const order = useSelector((state) => state.order.order);
  localStorage.removeItem("persist:root");
  const dispatch = useDispatch();
  dispatch(clearCart());
  const query = useQueryClient();
  query.invalidateQueries([GET_USER]);
  return (
    <div>
      <div style={{ height: "120px", backgroundColor: "bisque" }}>
        <center>
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <p className="text-[50px] font-bold">
                <img src="/vite.png" style={{ width: "5%" }} />
                Aroma Delute
              </p>
            </Link>
          </span>
        </center>
      </div>
      <div className="mt-[20px] p-10">
        <MySteps step={2} />
        <div className="flex h-[500px]" style={{ alignItems: "flex-start" }}>
          <Card
            hoverable
            style={{ fontSize: "20px" }}
            title="Order Information"
            className="mt-5 "
          >
            <h2 className="font-bold">
              Name: <span>{order.name} </span>
            </h2>
            <h2 className="font-bold">
              Email: <span>{order.mail} </span>
            </h2>
            <h2 className="font-bold">
              Phone: <span>{order.phone} </span>
            </h2>
            <h2 className="font-bold">
              Address: <span>{order.address} </span>
            </h2>
            <h2 className="font-bold">
              Total: <span>{order.total}$ </span>
            </h2>
            <h2 className="font-bold">
              Payment: <span>{order.payment} </span>
            </h2>
          </Card>
          <div className="ml-[17%] mt-[1%]">
            <Result
              status="success"
              title="Successfully Purchased Your Order On Aroma Delute"
              subTitle=" Thanks you for buying our product, we will ship for you immediately"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  //   const [searchParams] = useSearchParams();
  //   const order = JSON.parse(searchParams?.get("data"));
  //   console.log("🚀 ~ file: index.jsx:7 ~ OrderSuccesful ~ order:", order);

  //   return <div>OrderSuccesful</div>;
};

export default OrderSuccesful;
