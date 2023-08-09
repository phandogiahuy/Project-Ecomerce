import { Carousel } from "antd";

import { sliderItems } from "../../data";
import Categories from "../Categories";
import { Container, Desc, InforContainer, Slide, Title } from "./Style";

const contentStyle = {
  margin: 0,
  height: "540px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#efe7e1",
};
const Slider = () => {
  return (
    <Container>
      <div className=" w-[55%]">
        <Carousel autoplay effect="fade">
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <div style={contentStyle} className="flex">
                <img
                  src={item.img}
                  className="  w-[60%] object-fill "
                  style={{ imageRendering: "pixelated" }}
                />
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
};
export default Slider;
