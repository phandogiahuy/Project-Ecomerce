import React from "react";
import Announcement from "../../components/Annoucement/Index";
import Navbar from "../../components/NavBar/Index";
import Footer from "../../components/Footer/Footer";
import CheckoutComponent from "../../components/Checkout";

const Checkout = () => {
  return (
    <div className="overflow-x-hidden">
      <Announcement />
      <CheckoutComponent />
      <Footer />
    </div>
  );
};

export default Checkout;
