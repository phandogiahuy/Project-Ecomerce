import React from "react";

import Announcement from "../../components/Annoucement/Annoucement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Bottom/Footer";
import Navbar from "../../components/Top/Navbar";
import Newsletter from "../../components/Bottom/Newsletter";
import PopularProduct from "../../components/Product/PopularProduct";
import SimpleSlider from "../../components/Middle/Slider";
import ListCoupon from "../../components/Coupon/ListCoupon";

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
