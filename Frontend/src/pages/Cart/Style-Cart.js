import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-family: "Arvo", serif;
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
`;
export const Top = styled.div``;
export const Continue = styled.a`
  font-family: "Work Sans", sans-serif;
  text-decoration: underline;
  margin-left: 80%;
  transition: all 0.5s ease-out;
  font-size: 20px;
  cursor: pointer;
  width: fit-content;
  :hover {
    font-size: large;
    text-decoration: none;
  }
`;
export const Middle = styled.div`
  margin-bottom: 30px;
`;

export const ProductImage = styled.img`
  max-width: 30%;
`;

export const TopTexts = styled.div``;
export const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  font-size: 25px;
`;
export const Type = styled.div`
  display: flex;
  justify-content: space-around;
  z-index: 1;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
`;
export const TypeProduct = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
export const Quanity = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
export const Price = styled.span`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 45px;
`;
export const ProductDetail = styled.span`
  display: flex;
  width: 30%;
  margin-left: 100px;
  margin-top: 20px;
  position: relative;
`;
export const ProductName = styled.p`
  margin-left: 10px;
  font-weight: 400;
  font-family: "Arvo", serif;
  font-size: 30px;
`;

export const ProductQuanity = styled.p`
  margin-left: 30px;
`;
export const TypeItem = styled.p`
  position: absolute;
  top: 40%;
  left: 32%;
  font-size: 20px;
`;

export const ProductPrice = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 30px;
`;
export const ProductType = styled.span`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;
export const Bottom = styled.div``;
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  padding: 20px;
`;
export const SummaryItem = styled.span`
  padding: 10px;
`;
export const SummaryTitle = styled.h1``;
export const SummaryDiscount = styled.span`
  display: flex;
  position: relative;
  margin-bottom: 50px;
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const InforDiscount = styled.p`
  position: absolute;
  font-size: 16px;
  top: 40px;
`;
export const ClearCart = styled.p`
  font-family: "Work Sans", sans-serif;
  text-decoration: underline;
  transition: all 0.5s ease-out;
  font-size: 20px;
  width: fit-content;
  cursor: pointer;
  :hover {
    font-size: large;
    text-decoration: none;
  }
`;
