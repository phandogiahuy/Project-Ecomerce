import React from "react";
import {
  AttributeWrapper,
  FlavorIcon,
  PlaceIcon,
  ProcessIcon,
  StyledCard,
} from "./style";
import { Image } from "antd";
import {
  RocketOutlined,
  CrownOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductCard = ({ product, match }) => {
  const navigate = useNavigate();
  let matchRankIcon = null;
  match = Math.ceil((match * 100) / 3);
  switch (match) {
    case 1:
      matchRankIcon = <CrownOutlined />;
      break;
    case 2:
      matchRankIcon = <RocketOutlined />;
      break;
    case 3:
      matchRankIcon = <TrophyOutlined />;
      break;
    default:
      matchRankIcon = null;
  }
  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };
  return (
    <StyledCard title={product.name} onClick={handleClick}>
      <img src={product.img} width={250} />
      <AttributeWrapper>
        <FlavorIcon>🍔</FlavorIcon>
        <p>
          <strong style={{ fontWeight: 700 }}>Flavor:</strong> {product.flavor}
        </p>
      </AttributeWrapper>
      <AttributeWrapper>
        <ProcessIcon>🍳</ProcessIcon>
        <p>
          <strong style={{ fontWeight: 700 }}>Process:</strong>{" "}
          {product.process}
        </p>
      </AttributeWrapper>
      <AttributeWrapper>
        <PlaceIcon>🏠</PlaceIcon>
        <p>
          <strong style={{ fontWeight: 700 }}>Place: </strong>
          {product.place}
        </p>
      </AttributeWrapper>
      <p>
        {matchRankIcon}
        <strong style={{ fontWeight: 700 }}>Match(%):</strong> {match}%
      </p>
    </StyledCard>
  );
};
