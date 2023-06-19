import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Announcement from "../../components/Annoucement/Index";
import Navbar from "../../components/NavBar/Index";
import Footer from "../../components/Footer/Footer";
import MySteps from "../../components/Steps";
import { Card, Result } from "antd";
import { DropboxOutlined, ShopTwoTone } from "@ant-design/icons";

const OrderSuccesful = () => {
  const { order } = useSelector((state) => state.order);
  return (
    <div>
      <div style={{ height: "120px", backgroundColor: "bisque" }}>
        <center>
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <p className="font-bold text-[50px]">
                <img src="/vite.png" style={{ width: "5%" }} />
                Aroma Delute
              </p>
            </Link>
          </span>
        </center>
      </div>
      <div className="p-10 mt-[20px]">
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