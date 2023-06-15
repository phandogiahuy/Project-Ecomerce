import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  background-color: green;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
export const Wrapper = styled.div`
  height: 90%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-out;
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-bottom: 10%;
`;
export const Image = styled.img`
  max-width: 200%;
  max-height: 100%;
  object-fit: cover;
`;
export const InforContainer = styled.div`
  flex: 1;
  margin-bottom: 15%;
  margin-left: 15%;
`;
export const Title = styled.h1`
  font-size: 140px;
  font-family: "Chicle", sans-serif;
`;
export const Desc = styled.p`
  font-family: "Marmelad", sans-serif;
  color: ${(props) => props.cl};
  font-size: 17px;
`;

export const Arrow = styled.div`
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
