import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: #d8f1e3;
  margin-top: 20px;
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Img = styled.img`
  border-radius: 5px;
`;
export const InforContainer = styled.div`
  flex: 2;
  padding: 40px;
  background-color: white;
  margin-left: 20px;
  box-shadow: 1px 6px 26px -21px rgba(102, 93, 244, 0.5) inset;
  border-radius: 5px;
  min-height: 500px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 35px;
  font-family: "Cantora One', sans-serif";
`;
export const Desc = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 10px 0px;
`;
export const Price = styled.span`
  font-weight: 400;
  font-size: 35px;

  color: #f62400;
`;
export const PriceFirst = styled.span`
  font-size: 35px;
  text-decoration: line-through;
  color: #afafaf;
  margin-left: 3%;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  margin: 30px 0;
`;
export const FilterTitle = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-right: 10px;
`;
export const AddContainer = styled.div`
  display: flex;
`;
export const Comment = styled.div`
  width: 50%;
  margin-top: 5px;
`;
export const Sale = styled.div`
  color: #f62400;
`;
export const Recommend = styled.div`
  width: 100%;
  height: 20%;

  background-color: #d8f1e3;
`;

export const ProductFeature = styled.div`
  /* width: 50%; */
  align-self: flex-start;
`;
