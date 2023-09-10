import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  ${mobile({ height: "50px" })};
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  height: 100px;
  ${mobile({ padding: "10px" })}
`;
export const InforUser = styled.div`
  cursor: pointer;
  font-size: 25px;
  color: midnightblue;
  margin: 0 10px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  padding: 10px;
  min-width: 390px;
`;
export const Center = styled.div`
  flex: 2;
  margin-left: 20px;
  display: flex;
`;
export const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: midnightblue;
  ${mobile({ justifyContent: "center" })};
`;
export const Logo = styled.div`
  font-weight: bold;
  font-size: 100px;
  font-family: "Youth Action", sans-serif;
  ${mobile({ fontSize: "20px", flex: 2 })}
  cursor: pointer;
`;
export const LogoImage = styled.img`
  width: 18%;
`;
export const MenuItem = styled.div`
  font-size: 25px;

  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const SearchComponent = styled.p`
  font-size: 25px;
  cursor: pointer;
  color: midnightblue;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

export const RecommendProduct = styled.div`
  font-size: 25px;
  cursor: pointer;
  color: midnightblue;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  margin-left: 100px;
`;
