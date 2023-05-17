import { Affix } from "antd";
import React from "react";
import { Container } from "./Style-Annoucement";

function Announcement() {
  return (
    <Affix>
      <Container>Free shipping on orders above 100$</Container>
    </Affix>
  );
}

export default Announcement;
