import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  ${mobile({ marginLeft: "100px" })};
  margin-bottom: 50px;
`;
export const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
  margin-left: 50px;
`;
