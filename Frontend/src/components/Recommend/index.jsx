import React, { useLayoutEffect, useState } from "react";
import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";
import { Carousel, Skeleton } from "antd";
import RecommendList from "./RecommendList";
import { Breadcrumb, Card, Slider } from "antd";
import { Wrapper } from "./style-recommend";

const { Meta } = Card;
const RecommendProduct = ({ products }) => {
  const res = useGetProductByCat(products);
  if (res.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  return (
    <div style={{ position: "relative" }}>
      <h1>Related Products</h1>
      <Wrapper>
        {res.data.slice(0, 5).map((product) => (
          <RecommendList products={product} />
        ))}
      </Wrapper>
    </div>
  );
};

export default RecommendProduct;
