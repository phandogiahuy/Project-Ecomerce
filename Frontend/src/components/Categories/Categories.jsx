import { Row } from "antd";
import React from "react";

import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem";
import { Container, ContainerCategories, Title } from "./Style-Category";

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
