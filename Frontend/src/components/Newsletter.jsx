import { MailOutlined } from "@ant-design/icons";
import { Descriptions } from "antd";
import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const Title = styled.h1``;
const Description = styled.div`
  padding: 15px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1 solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWS</Title>
      <Description>
        JOIN OUR EMAIL LIST FOR 10% OFF YOUR FIRST ORDER
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MailOutlined style={{ fontSize: "30px" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
