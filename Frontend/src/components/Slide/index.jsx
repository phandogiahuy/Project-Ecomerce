import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import { sliderItems } from "../../data";
import {
  Container,
  Desc,
  ImgContainer,
  InforContainer,
  Slide,
  Title,
  Wrapper,
} from "./Style-Slider";
import { Carousel, Image } from "antd";
import Categories from "../Categories/Index";
const contentStyle = {
  margin: 0,
  height: "625px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#efe7e1",
};
function Slider() {
  return (
    <Container>
      <div className="w-[50%]">
        <Carousel autoplay effect="fade">
          {sliderItems.map((item) => (
            <Slide>
              <div style={contentStyle} className="flex">
                <img src={item.img} className="w-[60%] " />
                <InforContainer>
                  <Title>{item.title}</Title>
                  <Desc cl={item.color}>{item.desc}</Desc>
                </InforContainer>
              </div>
            </Slide>
          ))}
        </Carousel>
      </div>
      <Categories />
    </Container>
  );
}

export default Slider;
