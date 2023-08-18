import styled from "styled-components";
import { Button, Carousel } from "antd";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-size: 18px;
`;

export const ChatLog = styled.div`
  /* Adjust the height as needed */
  overflow-y: auto;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OptionButton = styled(Button)`
  width: fit-content;
  background-color: ${(props) => (props.selected ? "#1890ff" : "#dfe5d5")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: ${(props) => (props.selected ? "none" : "1px solid #d9d9d9")};

  &:hover {
    background-color: ${(props) => (props.selected ? "#1890ff" : "#fafafa")};
  }
`;

export const Recommendation = styled.div`
  font-weight: bold;
  margin-top: 1rem;
`;
export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const RecommendationSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;
