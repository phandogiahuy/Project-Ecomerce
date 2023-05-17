import styled from "styled-components";

import { mobile } from "../../responsive";
export const Container = styled.div`
  height: 130px;
  ${mobile({ height: "50px" })}
  background-color: aliceblue;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px" })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ justifyContent: "center" })};
`;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 70px;
  font-family: "Youth Action", sans-serif;
  text-align: center;
  ${mobile({ fontSize: "20px", flex: 2 })}
  cursor: pointer;
`;
export const LogoImage = styled.img`
  width: 10%;
`;
export const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const SearchComponent = styled.p`
  font-size: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  padding: 20px;
  margin-left: 20px;
`;