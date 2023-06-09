import { Pagination, Row, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Product from "./newProduct";

import { Container, Title } from "./style-popularProduct";
import { useGetProducts } from "../../hooks/Queries/Product/useGetProducts";
import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";

const PopularProduct = ({ cat, sort }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const getProductByCat = useGetProductByCat(cat);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = cat ? getProductByCat : getProduct;

        if (res.isLoading) {
          return <Skeleton active />;
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
          : product
              .slice(startIndex, endIndex)
              .map((item) => <Product item={item} key={item._id} />)}
        {product && !cat && (
          <Pagination
            className="ml-[80%]"
            onChange={(e) => setCurrentPage(e)}
            defaultCurrent={1}
            total={product.length}
          />
        )}
      </Row>
    </Container>
  );
};

export default PopularProduct;
