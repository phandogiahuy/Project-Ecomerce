import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 60vh;
  ${mobile({ display: "none" })}
  display: flex;
  margin-bottom: 180px;
`;
export const Slide = styled.div``;
export const ImgContainer = styled.div``;
export const Wrapper = styled.div`
  display: flex;
`;

export const InforContainer = styled.div`
  margin-top: 20%;
  width: 100%;
  padding: 5px;
`;
export const Title = styled.h1`
  font-family: "Chicle", sans-serif;
  font-size: 75px;
  color: #a33636;
`;
export const Desc = styled.p`
  font-family: "Marmelad", sans-serif;
  color: #302110;
  font-size: 17px;
`;
