import React from "react";
import { StyledProductList } from "./style";
import { ProductCard } from "./Card";

const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard
          key={product._doc._id}
          product={product._doc}
          match={product.matchCount}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
