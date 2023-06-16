import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Newsletter from "../../../components/Footer/Newsletter";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Select,
  Option,
} from "./style-productList";
import Announcement from "../../../components/Annoucement/Index";
import Navbar from "../../../components/NavBar/Index";
import PopularProduct from "../../../components/Product/PopularProduct";
import { FloatButton } from "antd";
import { UpCircleFilled } from "@ant-design/icons";

const ProductList = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const { cat } = useParams();
  console.log(cat);
  const [sort, setSort] = useState("newest");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select name="price" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="ASC">Price (ASC)</Option>
            <Option value="DESC">Price (DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <PopularProduct cat={cat} sort={sort} />
      <Newsletter />
      <Footer />
      <FloatButton.BackTop icon={<UpCircleFilled />} />
    </Container>
  );
};

export default ProductList;
