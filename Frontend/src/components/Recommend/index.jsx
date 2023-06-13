import React, { useLayoutEffect, useState } from "react";
import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";
import { Carousel, Skeleton } from "antd";
import RecommendList from "./RecommendList";
import { Breadcrumb, Card, Slider } from "antd";
import { Arrow, Wrapper } from "./style-recommend";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Meta } = Card;
const RecommendProduct = ({ products }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const res = useGetProductByCat(products);
  if (res.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 && slideIndex - 1);
    } else {
      setSlideIndex(slideIndex < 1 && slideIndex + 1);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <h1>Related Products</h1>
      <Wrapper slideIndex={slideIndex}>
        {res.data.slice(0, 10).map((product) => (
          <RecommendList products={product} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </div>
  );
};

export default RecommendProduct;
