import React from "react";

import CheckoutComponent from "../../components/Checkout";
import Footer from "../../components/Footer";
import Announcement from "../../components/Annoucement";

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
