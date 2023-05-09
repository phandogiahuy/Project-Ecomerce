import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProduct from "../components/PopularProduct";
import SimpleSlider from "../components/Slider";
import Coupon from "../components/Coupon";
import ListCoupon from "../components/ListCoupon";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SimpleSlider />
      <Categories />
      <PopularProduct />
      <ListCoupon />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
