import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./newProduct";

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

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/product?category=${cat}`
            : `http://localhost:3000/api/product/`
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    cat && setFilterProduct(product);
  }, [product, cat]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "ASC") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.price[0] - b.price[0])
      );
    } else {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => b.price[0] - a.price[0])
      );
    }
  }, [sort]);
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
          ? filterProduct.map((item) => <Product item={item} key={item._id} />)
          : product
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Row>
    </Container>
  );
};

export default PopularProduct;
