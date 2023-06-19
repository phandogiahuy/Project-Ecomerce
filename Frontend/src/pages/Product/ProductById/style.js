import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Img = styled.img``;
export const InforContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  font-family: "Cantora One', sans-serif";
`;
export const Desc = styled.p`
  font-size: 15px;
  letter-spacing: 2px;
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 400;
  font-size: 45px;

  color: #f62400;
`;
export const PriceFirst = styled.span`
  font-size: 45px;
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
  margin-top: 50px;
`;

export const ProductFeature = styled.div`
  /* width: 50%; */
  align-self: flex-start;
`;
