import styled from "styled-components";

export const Infor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 7px;
  font-family: "g Guarantee", sans-serif;
`;
export const InforButton = styled.div`
  cursor: pointer;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: inset 200px 0 0px 0px #54b3d6;
    color: white;
  }
`;
export const Name = styled.h1`
  margin-left: 50px;
  font-weight: 500;
  font-size: 20px;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  image-rendering: pixelated;

  :hover {
    animation: bounce2 1s ease infinite;
  }
  @keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-left: 40px;
  font-family: "AOK Buenos Aires", sans-serif;
`;

export const PriceFirst = styled.div`
  font-weight: 700;
  font-size: 30px;
  font-family: "AOK Buenos Aires", sans-serif;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
