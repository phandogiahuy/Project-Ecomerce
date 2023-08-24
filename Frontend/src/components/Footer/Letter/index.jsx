import { MailOutlined } from "@ant-design/icons";
import React from "react";

import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./style";

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
