import React, { useContext } from "react";

import { BackgoundTheme } from ".";

const TestComponent = () => {
  const bg = useContext(BackgoundTheme);
  return (
    <div style={{ backgroundColor: `${bg.backgrounds}`, height: "300px" }}>
      testComponent
    </div>
  );
};

export default TestComponent;
