import styled from "styled-components";

export const Nav = styled.div`
  background-color: white;
  flex: 1;
  padding: 20px;
`;
export const Detail = styled.div`
  background-color: #f3f3f3;
  flex: 2;
  margin-left: 20px;
  border-radius: 1%;
  box-shadow: -2px -1px 5px 0px rgba(55, 46, 46, 0.5) inset;
`;
export const Wrapper = styled.div`
  flex: 2;
  margin-left: 20px;
  background-color: bisque;
  padding: 30px;
  border-radius: 2%;
  box-shadow: -2px -1px 5px 0px rgba(55, 46, 46, 0.5) inset;
`;
export const Infor = styled.div``;
export const Order = styled.div`
  margin-top: 20px;
`;
export const History = styled.div`
  margin-top: 20px;
`;
export const Button = styled.button`
  background-color: #38c027;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 15px 30px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  width: 100%;
  :hover {
    background-image: linear-gradient(
      90deg,
      #53cbef 0%,
      #dcc66c 50%,
      #ffa3b6 75%,
      #53cbef 100%
    );
    animation: slidernbw 5s linear infinite;
    color: #000;
  }
  @keyframes slidernbw {
    to {
      background-position: 20vw;
    }
  }
`;
