import styled from "styled-components";

export const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
`;
export const Discount = styled.span`
  font-size: 36px;
  font-weight: bold;
  font-family: "AOK Buenos Aires", sans-serif;
`;
export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const Code = styled.span`
  font-size: 20px;
  font-family: "AOK Buenos Aires", sans-serif;
`;
export const ContainerCard = styled.div`
  margin-left: 25px;
  cursor: pointer;
  :hover {
    transform-origin: top center;
    animation: swing 2s ease infinite;
  }
  @keyframes swing {
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(5deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
