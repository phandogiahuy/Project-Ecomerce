import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  ${mobile({ marginLeft: "100px" })};
  margin-bottom: 50px;
  background-color: white;
  height: fit-content
  box-shadow: 1px -2px 4px 1px rgba(135, 234, 133, 0.75) inset;
`;
export const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
  margin-left: 50px;
`;
