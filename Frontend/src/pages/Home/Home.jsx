import React from "react";

import Announcement from "../../components/Annoucement/Annoucement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import Newsletter from "../../components/Footer/Newsletter";
import PopularProduct from "../../components/Product/PopularProduct";
import ListCoupon from "../../components/Coupon/ListCoupon";
import Slider from "../../components/Slide/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProduct />
      <ListCoupon />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
