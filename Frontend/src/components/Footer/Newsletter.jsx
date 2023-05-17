import { MailOutlined } from "@ant-design/icons";
import { Descriptions } from "antd";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./Style-News";

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
