import React from "react";

import { FloatButton, Divider } from "antd";
import Announcement from "../../components/Annoucement";
import Navbar from "../../components/NavBar";
import ListCoupon from "../../components/Coupon/coupon-list";
import Newsletter from "../../components/Footer/Newsletter";
import Footer from "../../components/Footer/Footer";
import PopularProduct from "../../components/Product/PopularProduct";
import Slider from "../../components/Slide/index";
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
