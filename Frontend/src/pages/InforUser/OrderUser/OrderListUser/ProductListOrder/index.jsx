import React from "react";

import { Quantity, Size, Title, Type } from "./style";

const ProductListOrder = ({ item }) => {
  return (
    <div className="flex ">
      <Quantity>{item.quantity}&nbsp;</Quantity>
      <Title>{item.product.title}/</Title>
      <Size>{item.size}gr&nbsp;</Size>
      <Type>{item.type}</Type>
    </div>
  );
};

export default ProductListOrder;
