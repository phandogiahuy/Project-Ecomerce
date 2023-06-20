import React from "react";

import Announcement from "../../components/Annoucement";
import CheckoutComponent from "../../components/Checkout";
import Footer from "../../components/Footer/Footer";

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
