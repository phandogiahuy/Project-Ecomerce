import { Affix } from "antd";
import React from "react";

import { Container } from "./style-annoucement";

function Announcement() {
  return (
    <Affix>
      <Container>Free shipping on orders above 100$</Container>
    </Affix>
  );
}

export default Announcement;
