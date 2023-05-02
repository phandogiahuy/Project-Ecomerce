import { Row } from "antd";
import React from "react";
import styled from "styled-components";

import { categories } from "../data";
import { mobile } from "../responsive";
import CategoriesItem from "./CategoriesItem";

const ContainerCategories = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  ${mobile({ marginTop: "150px" })}
  padding: 5px;
`;
const Categories = () => {
  return (
    <ContainerCategories>
      <Title>Categories</Title>
      <Container>
        <Row gutter={[24, 8]} style={{ marginTop: "10px" }}>
          {categories.map((item) => (
            <CategoriesItem item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </ContainerCategories>
  );
};

export default Categories;
