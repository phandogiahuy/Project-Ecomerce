import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 50px;
  ${mobile({ marginLeft: "100px" })};
`;
export const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
  margin-left: 50px;
`;
