import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: green;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-out;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  margin-left: 120px;
  height: 80%;
`;
const InforContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-left: 250px;
  margin-bottom: 200px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p``;

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
  opacity: 4;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image
                src={item.img}
                style={{
                  width: "858px",
                  height: "619px",
                  maxWidth: "150%",
                  marginLeft: "0px",
                }}
              />
            </ImgContainer>
            <InforContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Space wrap>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "GrayText",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  ORDER NOW
                </Button>
              </Space>
            </InforContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
