import { Card, Button, message } from "antd";
import { useState } from "react";
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
const Coupon = ({ data }) => {
  const handleClick = () => {
    message.success("Coupon code generated!");

    navigator.clipboard.writeText(data.code);
  };

  return (
    <Card
      className="coupon-card"
      style={{
        width: "100%",
        margin: "10px",
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
  );
};

export default Coupon;
