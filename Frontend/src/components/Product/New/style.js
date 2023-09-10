import styled from "styled-components";

export const Infor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  font-family: "g Guarantee", sans-serif;
`;
export const InforButton = styled.div`
  cursor: pointer;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;
export const Name = styled.h1`
  margin-left: 50px;
  font-weight: 600;
  font-size: 14px;
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
      transform: translateY(-20px);
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
export const ButtonOrder = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.5rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 17px;
  border-radius: 500px;
  overflow: hidden;
  background: #66ff66;
  color: ghostwhite;
  :hover {
    color: black;
  }
  ::before,
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  ::before {
    content: "";
    background: #50734e;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  :hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;
export const ButtonSpan = styled.span`
  position: relative;
  z-index: 10;
  transition: color 0.4s;
`;
