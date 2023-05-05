import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./newProduct";
import { useProducts } from "../hooks/useProducts";
import { useProductByCat } from "../hooks/detail/useProductByCat";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
`;
const PopularProduct = ({ cat, sort }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  // const getProductByCat = useProductByCat(cat);
  // if (getProduct.isLoading) {
  //   <div>...loading</div>;
  // }
  // if (getProduct.error) {
  //   return <div>{getProduct.error.message}</div>;
  // }
  // setProduct(getProduct.data);

  const res = cat ? useProductByCat(cat) : useProducts();
  if (res.isLoading) {
    return <div>...loading</div>;
  }
  if (res.error) {
    return <div>{res.error.message}</div>;
  }
  return (
    <Container>
      <Title> Product </Title>
      <h1
        style={{
          textTransform: "uppercase",
          fontWeight: 700,
          fontSize: "70px",
          marginLeft: 20,
        }}
      >
        {cat}
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ marginTop: 10 }}
      >
        {cat
          ? res.data.map((item) => <Product item={item} key={item._id} />)
          : res.data
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Row>
    </Container>
  );
};

export default PopularProduct;
