import React from "react";

import CheckoutComponent from "../../components/Checkout/Index";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Annoucement/Index";

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
