import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import { sliderItems } from "../../data";
import {
  Arrow,
  Container,
  Desc,
  Image,
  ImgContainer,
  InforContainer,
  Slide,
  Title,
  Wrapper,
} from "./Style-Slider";

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
              <Desc cl={item.color}>{item.desc}</Desc>
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
