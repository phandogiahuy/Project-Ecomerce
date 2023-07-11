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
  height: 150px;
  ${mobile({ padding: "10px" })}
`;
export const InforUser = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
`;
export const Center = styled.div`
  flex: 2;
`;
export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  ${mobile({ justifyContent: "center" })};
`;
export const Logo = styled.div`
  font-weight: bold;
  font-size: 90px;
  font-family: "Youth Action", sans-serif;
  ${mobile({ fontSize: "20px", flex: 2 })}
  cursor: pointer;
`;
export const LogoImage = styled.img`
  width: 28%;
`;
export const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const SearchComponent = styled.p`
  font-size: 30px;
  cursor: pointer;
  color: midnightblue;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
