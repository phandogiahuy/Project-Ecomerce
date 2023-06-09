import { Steps } from "antd";
import React from "react";

const MySteps = ({ step }) => {
  return (
    <Steps
      current={step}
      items={[
        {
          title: "Start",
          description: "Check Product",
        },
        {
          title: "In Progress",
          description: "Check Out",
        },
        {
          title: "Success",
          description: "Finish",
        },
      ]}
    />
  );
};

export default MySteps;
