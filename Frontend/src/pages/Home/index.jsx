import React from "react";

import { Button, ConfigProvider, theme, FloatButton, Divider } from "antd";
import Announcement from "../../components/Annoucement/Index";
import Categories from "../../components/Categories/Index";
import Navbar from "../../components/NavBar/Index";
import ListCoupon from "../../components/Coupon/coupon-list";
import Newsletter from "../../components/Footer/Newsletter";
import Footer from "../../components/Footer/Footer";
import PopularProduct from "../../components/Product/PopularProduct";
import Slider from "../../components/Slide/index";
import FlashScreen from "../../components/FlashScreen";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
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
      {/* <FlashScreen /> */}
    </div>
  );
};

export default Home;
