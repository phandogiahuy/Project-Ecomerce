import { Card } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  margin: 10px;
  width: 300px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const AttributeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  svg {
    margin-right: 6px;
    color: #1890ff;
  }

  p {
    margin: 0;
  }
`;

export const FlavorIcon = styled.span`
  font-size: 18px;
  margin-right: 6px;
  color: #ff4d4f;
`;

export const ProcessIcon = styled.span`
  font-size: 18px;
  margin-right: 6px;
  color: #52c41a;
`;

export const PlaceIcon = styled.span`
  font-size: 18px;
  margin-right: 6px;
  color: #fadb14;
`;
