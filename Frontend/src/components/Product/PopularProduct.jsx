/* eslint-disable no-nested-ternary */
import { Pagination, Row, Skeleton } from "antd";
import React, { useState } from "react";

import { useGetProductByCat } from "../../hooks/Queries/Product/useGetProductByCat";
import { useGetProducts } from "../../hooks/Queries/Product/useGetProducts";
import Product from "./newProduct";
import { Container } from "./style-popularProduct";

const PopularProduct = ({ cat, sort }) => {
  // const queryClient = useQueryClient();

  const [pagination, setPagination] = useState({
    pageSize: 8,
    page: 1,
  });

  const { data, isSuccess, isLoading } = useGetProducts(pagination);
  const getProductByCat = useGetProductByCat(cat, sort);

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
