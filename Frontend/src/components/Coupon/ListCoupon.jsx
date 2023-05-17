import React, { useState } from "react";
import Coupon from "./Coupon";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import { Arrow, Container, Title, Wrapper } from "./Style-CoponList";
import { useGetCoupon } from "../../hooks/Queries/Discount/useGetCoupon";

const ListCoupon = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const res = useGetCoupon();
  if (res.isLoading) {
    return <Skeleton active />;
  }
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Title> Discount Code </Title>
      <Wrapper slideIndex={slideIndex}>
        {res.data.map((item) => (
          <Coupon data={item} key={item._id} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default ListCoupon;
