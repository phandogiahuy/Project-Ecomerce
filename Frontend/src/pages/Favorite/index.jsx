import { ControlOutlined, CrownOutlined } from "@ant-design/icons";
import { FloatButton, Skeleton } from "antd";
import React from "react";

import Announcement from "../../components/Annoucement/Index";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar";
import RankedComponent from "../../components/Ranked/Index";
import { useGetRevenue } from "../../hooks/Queries/Revenue/useGetRevenue";
import {
  Container,
  ContainerItemProduct,
  ContentRank,
  FavoriteCoffee,
  Ranked,
  Title,
  TitleRanked,
  Wrapper,
} from "./style";

const Favorite = () => {
  const product = useGetRevenue();
  const renderRanked = () => {
    if (product.isLoading) {
      return (
        <div>
          <Skeleton />
        </div>
      );
    }
    return product.data.map((item) => (
      <RankedComponent product={item} key={item._id} />
    ));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Ranked>
        <Title>
          <center className="ml-3 text-[50px] font-bold">
            <CrownOutlined />
            <FavoriteCoffee>Favorite Coffee</FavoriteCoffee>
          </center>
          <center className="p-1">
            <ContentRank>
              This is the five most favorable products in 2023
            </ContentRank>
          </center>
        </Title>
        <Wrapper>
          <TitleRanked className="ml-3 font-bold ">
            {" "}
            <ControlOutlined /> Ranked
          </TitleRanked>
          <ContainerItemProduct>{renderRanked()}</ContainerItemProduct>
        </Wrapper>
      </Ranked>
      <FloatButton.BackTop />

      <Footer />
    </Container>
  );
};

export default Favorite;
