import { Affix } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #5a152b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Affix>
      <Container>Free shipping on orders above 100$</Container>
    </Affix>
  );
}

export default Announcement;
