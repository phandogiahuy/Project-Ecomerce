import { UpCircleFilled } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Announcement from "../../../components/Annoucement";
import Footer from "../../../components/Footer/Footer";
import Newsletter from "../../../components/Footer/Newsletter";
import Navbar from "../../../components/NavBar";
import PopularProduct from "../../../components/Product/PopularProduct";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
} from "./style-productList";

const ProductList = () => {
  // const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  const { cat } = useParams();
  const [sort, setSort] = useState("newest");
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container className="overflow-x-hidden">
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
