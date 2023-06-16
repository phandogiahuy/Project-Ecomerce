import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 75vh;
  ${mobile({ display: "none" })}
  display: flex;
`;
export const Slide = styled.div``;
export const ImgContainer = styled.div``;
export const Wrapper = styled.div`
  display: flex;
`;

export const InforContainer = styled.div`
  margin-top: 25%;
  width: 100%;
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
