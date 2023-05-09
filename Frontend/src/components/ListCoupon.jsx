import React, { useState } from "react";
import styled from "styled-components";
import Coupon from "./Coupon";
import { useCoupon } from "../hooks/useCoupon";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 50px;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
  margin-left: 50px;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 200%;
  padding: 10px;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-out;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: auto;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "8px"};
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
`;
const ListCoupon = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const res = useCoupon();
  if (res.isLoading) {
    return <div>...loading</div>;
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
          <Coupon data={item} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default ListCoupon;
