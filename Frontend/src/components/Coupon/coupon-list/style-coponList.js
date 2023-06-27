import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  background-color: white;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 6px 9px 101px -31px rgba(164, 213, 47, 0.37) inset;
`;
export const Title = styled.h1`
  font-weight: 700;
  margin: 5px;
  font-size: 40px;
  margin-left: 50px;
`;
export const Wrapper = styled.div`
  width: 225%;
  padding: 10px;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-out;
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
  opacity: 0.5;
`;
