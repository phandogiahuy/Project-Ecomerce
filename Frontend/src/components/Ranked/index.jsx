/* eslint-disable no-nested-ternary */
import {
  HeartOutlined,
  LikeOutlined,
  PlayCircleOutlined,
  StarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, Image, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Amount,
  Container,
  ImageProduct,
  Infor,
  Name,
  Price,
  STT,
} from "./style";

let stt = 0;
const RankedComponent = ({ product }) => {
  stt += 1;
  const navigate = useNavigate();
  const handleClickRank = () => {
    navigate(`/product/${product.productId._id}`);
  };
  if (stt > 5) {
    stt -= 5;
  }
  return (
    <Container>
      {stt === 1 ? (
        <STT>
          {stt} <TrophyOutlined />
        </STT>
      ) : stt === 2 ? (
        <STT>
          {stt} <StarOutlined />
        </STT>
      ) : stt === 3 ? (
        <STT>
          {stt} <HeartOutlined />
        </STT>
      ) : (
        <STT>
          {stt} <LikeOutlined />
        </STT>
      )}

      <ImageProduct>
        <Image src={product.productId.img} width={280} />
      </ImageProduct>
      <Infor>
        <Name>{product.productId.title}</Name>
        <Price>Price: {product.productId.price[0]}$</Price>
        <Amount>Sold: {product.amount}</Amount>
        <Space wrap>
          <Button onClick={handleClickRank}>
            <Name>
              See more <PlayCircleOutlined />
            </Name>
          </Button>
        </Space>
      </Infor>
    </Container>
  );
};

export default RankedComponent;
