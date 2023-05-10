import { Card, Button, message } from "antd";
import styled from "styled-components";

const ContainerBody = styled.div`
  display: flex;
  justify-content: center;
`;
const Discount = styled.span`
  font-size: 36px;
  font-weight: bold;
  font-family: "AOK Buenos Aires", sans-serif;
`;
const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Code = styled.span`
  font-size: 20px;
  font-family: "AOK Buenos Aires", sans-serif;
`;
const ContainerCard = styled.div`
  margin-left: 25px;
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
const Coupon = ({ data }) => {
  const handleClick = () => {
    message.success("Coupon code generated!");

    navigator.clipboard.writeText(data.code);
  };

  return (
    <ContainerCard>
      <Card
        className="coupon-card"
        style={{
          border: "1px solid #1C2F7F",
          backgroundColor: "aliceblue",
        }}
      >
        <ContainerBody>
          <Discount>{data.sale}% off</Discount>
        </ContainerBody>
        <ContainerFooter>
          <Code>
            This discount code will apply with order above {data.limit}$
          </Code>
          <Button
            type="primary"
            onClick={handleClick}
            style={{
              fontSize: "25px",
              height: "50px",
              width: "150px",
              backgroundColor: "#141246",
              marginTop: "10px",
            }}
          >
            Copy
          </Button>
        </ContainerFooter>
      </Card>
    </ContainerCard>
  );
};

export default Coupon;
