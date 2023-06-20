/* eslint-disable no-nested-ternary */
import { Pagination, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

import { GET_PRODUCT_CAT } from "../../constant/queryKey";
import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";
import { useGetProducts } from "../../hooks/Queries/Product/useGetProducts";
import Product from "./newProduct";
import { Container } from "./style-popularProduct";

const PopularProduct = ({ cat, sort }) => {
  const queryClient = useQueryClient();

  const [pagination, setPagination] = useState({
    pageSize: 8,
    page: 1,
  });

  const { data, isSuccess, isLoading } = useGetProducts(pagination);
  const getProductByCat = useGetProductByCat(cat);

  useEffect(() => {
    if (getProductByCat.data?.length) {
      if (sort === "newest") {
        queryClient.setQueryData([GET_PRODUCT_CAT, { cat }], (prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "ASC") {
        queryClient.setQueryData([GET_PRODUCT_CAT, { cat }], (prev) =>
          [...prev].sort(
            (a, b) =>
              Math.ceil(a.price[0] * (1 - a.sale / 100)) -
              Math.ceil(b.price[0] * (1 - b.sale / 100))
          )
        );
      } else {
        queryClient.setQueryData([GET_PRODUCT_CAT, { cat }], (prev) =>
          [...prev].sort(
            (a, b) =>
              Math.ceil(b.price[0] * (1 - b.sale / 100)) -
              Math.ceil(a.price[0] * (1 - a.sale / 100))
          )
        );
      }
    }
  }, [sort]);
  if (getProductByCat.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  return (
    <Container>
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
        {cat && getProductByCat.data.length > 0
          ? getProductByCat.data.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : cat
          ? getProductByCat.data.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : data.data.map((item) => <Product item={item} key={item._id} />)}

        {!cat && isSuccess && (
          <Pagination
            className="ml-[80%]"
            onChange={(currentPage) =>
              setPagination({ ...pagination, page: currentPage })
            }
            pageSize={data?.pagination.pageSize}
            pageSizeOptions={[8, 20]}
            current={data?.pagination?.page}
            total={data?.pagination.total}
          />
        )}
      </Row>
    </Container>
  );
};

export default PopularProduct;
