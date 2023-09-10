import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`;
export const STT = styled.div`
  align-self: center;
  font-size: 40px;
  width: 10%;
  font-family: "Chicken Butt", sans-serif;
  min-width: 12%;
`;

export const Infor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  margin-top: 10px;
  margin-left: 15px;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 20px;
  font-family: "KG HAPPY", sans-serif;
`;
export const Price = styled.h3`
  font-weight: 400;
  font-size: 25px;
  font-family: "Marker Monkey", sans-serif;
`;
export const Amount = styled.h3`
  font-weight: 400;
  font-family: "FunkyJunk", sans-serif;
  font-size: 25px;
`;

export const ImageProduct = styled.h3`
  width: 40%;
`;
