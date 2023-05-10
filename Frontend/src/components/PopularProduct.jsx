import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./newProduct";
import { useProducts } from "../hooks/useProducts";
import { useProductByCat } from "../hooks/detail/useProductByCat";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  margin-top: 50px;
  ${mobile({ marginLeft: "100px" })};
`;
const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
  margin-left: 50px;
`;
const PopularProduct = ({ cat, sort }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = useProducts();
  const getProductByCat = useProductByCat(cat);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = cat ? getProductByCat : getProduct;

        if (res.isLoading) {
          return <div>...loading</div>;
        }
        if (res.error) {
          return <div>{res.error.message}</div>;
        }
        if (res.isSuccess) {
          setProduct(res.data);
        }
      } catch (err) {}
    };
    getProducts();
  });
  useEffect(() => {
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
        style={{ marginTop: 10, marginRight: "20px" }}
      >
        {cat
          ? filterProduct.map((item) => <Product item={item} key={item._id} />)
          : product.map((item) => <Product item={item} key={item._id} />)}
      </Row>
    </Container>
  );
};

export default PopularProduct;
