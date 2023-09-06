import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AutoComplete, Button, Skeleton } from "antd";

import {
  ChatContainer,
  ChatLog,
  OptionsContainer,
  OptionButton,
  Recommendation,
  RecommendationSection,
  Heading,
} from "./style.js";
import { RollbackOutlined } from "@ant-design/icons";
import { useGetAllProducts } from "../../hooks/Queries/Product/useGetAllProduct.js";
import { useRecommendProduct } from "../../hooks/Mutation/useRecommendProduct.js";
import { useSelector } from "react-redux";
import ProductList from "./ProductList/index.jsx";

const features = ["flavor", "process", "place"];

const Chatbot = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [chatLog, setChatLog] = useState([]);
  const [messages, setMessages] = useState([]);

  const [recommendation, setRecommendation] = useState("");
  const [botQuestion, setBotQuestion] = useState("");
  const [completed, setCompleted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const history = useRef([]);
  const feature = useGetAllProducts();
  const { mutate } = useRecommendProduct();
  const product = useSelector((state) => state.recommend.product);

  const appendMessage = (user, message) => {
    setChatLog((prevLog) => [...prevLog, { user, message }]);
    history.current.push({ user, message });
    // }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const message = `${option}`;
    appendMessage("AromaCoffee ", `${botQuestion}`);
    setCurrentFeatureIndex(currentFeatureIndex + 1);
    appendMessage("User", message);

    setFilteredSuggestions([]);
    setSelectedOption(null);

    if (currentFeatureIndex === features.length - 1) {
      const data = [];
      for (const i in history.current) {
        if (history.current[i].user === "User") {
          data.push(history.current[i].message);
        }
      }
      const selection = { flavor: data[0], process: data[1], place: data[2] };
      mutate(selection);
      setCompleted(true);
    }
  };
  const handleSearch = (searchTerm) => {
    const featureOptions = options[features[currentFeatureIndex]];
    const matchingOptions = featureOptions.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSuggestions(matchingOptions);
    setInputValue(searchTerm);
  };
  const startOver = () => {
    setCurrentFeatureIndex(0);
    setCompleted(false);
    setChatLog([]);
    setRecommendation("");
    setBotQuestion(` What's your preferred ${features[0]}?`);
    history.current = [];
  };
  const rollback = () => {
    setCompleted(false);
    if (currentFeatureIndex > 0) {
      setCurrentFeatureIndex(currentFeatureIndex - 1);
      setBotQuestion(
        ` What's your preferred ${features[currentFeatureIndex - 1]}?`
      );
      setChatLog((prevLog) => prevLog.slice(0, -2)); // Remove last two entries (user and bot messages)
    }
    history.current.pop();
    history.current.pop();
  };
  useEffect(() => {
    const handle = () => {
      setBotQuestion(
        ` What's your preferred ${features[currentFeatureIndex]}?`
      );
    };
    handle();
  }, [currentFeatureIndex, completed]);
  // currentFeatureIndex, completed
  if (feature.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  const options = {
    flavor: feature.data.flavor,
    place: feature.data.place,
    process: feature.data.process,
  };
  const handleSelect = (value) => {
    setInputValue("");
    handleOptionClick(value);
  };

  return (
    <div>
      <h1>Product Recommendation</h1>
      <ChatContainer>
        <ChatLog>
          {chatLog.map((item, index) => (
            <div key={index}>
              <span style={{ fontWeight: 600 }}>{item.user}: </span>{" "}
              {item.message}
            </div>
          ))}
          {!botQuestion.includes("undefined") && (
            <div style={{ display: "flex" }}>
              <span style={{ fontWeight: 600 }}>AromaCoffee: &nbsp; </span>
              {botQuestion}
            </div>
          )}
          {botQuestion && !completed && (
            <div>
              <AutoComplete
                style={{ width: 300 }}
                options={filteredSuggestions.map((suggestion) => ({
                  value: suggestion,
                }))}
                value={inputValue}
                onSelect={handleSelect}
                onSearch={(searchTerm) => handleSearch(searchTerm)}
                placeholder={`Type your ${features[currentFeatureIndex]} preference...`}
              />
            </div>
          )}
          {botQuestion && (
            <div style={{ marginTop: "10px" }}>
              <Button onClick={rollback} disabled={currentFeatureIndex === 0}>
                <RollbackOutlined />
                Back
              </Button>
            </div>
          )}
        </ChatLog>
        <Heading>Product Recommendation</Heading>
        {completed && recommendation && (
          <RecommendationSection>
            <h2>Recommendation:</h2>
            <p>{recommendation}</p>
          </RecommendationSection>
        )}
        {completed && (
          <RecommendationSection>
            <h2>Matching Products:</h2>
            <ProductList products={product} />
          </RecommendationSection>
        )}
      </ChatContainer>

      {completed && (
        <div>
          <Button onClick={startOver}>Start Over</Button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
