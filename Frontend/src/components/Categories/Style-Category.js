import styled from "styled-components";
import { mobile } from "../../responsive";

export const ContainerCategories = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  ${mobile({ marginTop: "150px" })}
  padding: 5px;
  margin-left: 50px;
`;
