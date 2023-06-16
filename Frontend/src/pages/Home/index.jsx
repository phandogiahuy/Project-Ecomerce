import React from "react";

import { Button, ConfigProvider, theme, FloatButton, Divider } from "antd";
import Announcement from "../../components/Annoucement/Index";
import Categories from "../../components/Categories/Index";
import Navbar from "../../components/NavBar/Index";
import ListCoupon from "../../components/Coupon/coupon-list";
import Newsletter from "../../components/Footer/Newsletter";
import Footer from "../../components/Footer/Footer";
import PopularProduct from "../../components/Product/PopularProduct";
import Slider from "../../components/Slide/Index";
const Home = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0052CC",
            colorPrimaryBg: "#e6f7ff",
          },
        }}
      >
        <Announcement />
        <Navbar />
        <Slider />

        <Divider>
          <h1 className="text-6xl font-bold">PRODUCT</h1>
        </Divider>
        <PopularProduct />
        <ListCoupon />
        <Newsletter />
        <Footer />
        <FloatButton.BackTop />
      </ConfigProvider>
    </div>
  );
};

export default Home;
