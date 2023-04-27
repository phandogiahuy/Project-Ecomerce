import { Row } from "antd";
import React from "react";
import styled from "styled-components";

import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      <Row gutter={[24, 8]} style={{ marginTop: "10px" }}>
        {categories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
