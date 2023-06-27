import { UpCircleFilled } from "@ant-design/icons";
import { FloatButton, Select } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Announcement from "../../../components/Annoucement";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar";
import PopularProduct from "../../../components/Product/PopularProduct";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
} from "./style-productList";

const ProductList = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const { cat } = useParams();
  const [sort, setSort] = useState("newest");
  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <Container className="overflow-x-hidden">
      <Announcement />
      <Navbar />
      <div className="bg-blue-200 p-4">
        <FilterContainer>
          <Filter>
            <FilterText>Sort</FilterText>
            {/* <Select name="price" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="ASC">Price (ASC)</Option>
            <Option value="DESC">Price (DESC)</Option>
          </Select> */}
            <Select
              defaultValue="Newest"
              style={{
                width: 120,
              }}
              onChange={handleSort}
              options={[
                {
                  value: "newest",
                  label: "Newest",
                },
                {
                  value: "ASC",
                  label: "Price (ASC)",
                },
                {
                  value: "DESC",
                  label: "Price (DESC)",
                },
              ]}
            />
          </Filter>
        </FilterContainer>

        <PopularProduct cat={cat} sort={sort} />
      </div>
      <div className="bg-blue-200 p-3">
        <Footer />
      </div>
      <FloatButton.BackTop icon={<UpCircleFilled />} />
    </Container>
  );
};

export default ProductList;
