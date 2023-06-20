
import { Divider,FloatButton } from "antd";
import React from "react";

import Announcement from "../../components/Annoucement";
import ListCoupon from "../../components/Coupon/coupon-list";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter";
import Navbar from "../../components/NavBar";
import PopularProduct from "../../components/Product/PopularProduct";
import Slider from "../../components/Slider";

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
