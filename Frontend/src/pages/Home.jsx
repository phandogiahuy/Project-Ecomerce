import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProduct from "../components/PopularProduct";
import SimpleSlider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <SimpleSlider />
      <Categories />
      <PopularProduct />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
