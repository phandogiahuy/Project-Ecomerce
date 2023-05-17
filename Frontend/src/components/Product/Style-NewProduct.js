import styled from "styled-components";

export const Infor = styled.div`
  position: absolute;
  bottom: 26px;
  left: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-left: 10px;
  margin-bottom: 7px;
  font-family: "g Guarantee", sans-serif;

  :hover {
    transform: scale(1.1);
    box-shadow: inset 180px 0 0 0 #54b3d6;
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
  margin-left: 20px;
  font-family: "AOK Buenos Aires", sans-serif;
`;
