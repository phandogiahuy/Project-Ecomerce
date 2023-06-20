import { sliderItems } from "../../data";
import { Container, Desc, InforContainer, Slide, Title } from "./Style";
import { Carousel, Image } from "antd";
import Categories from "../Categories";
const contentStyle = {
  margin: 0,
  height: "540px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#efe7e1",
};
function Slider() {
  return (
    <Container>
      <div className=" w-[50%]">
        <Carousel autoplay effect="fade">
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <div style={contentStyle} className="flex">
                <img
                  src={item.img}
                  className=" h-[550px] w-[60%]  "
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
}

export default Slider;
