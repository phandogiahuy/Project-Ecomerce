import React, { useContext, useEffect, useMemo } from "react";

import { BackgoundTheme } from ".";

const TestComponent2 = () => {
  const bg = useContext(BackgoundTheme);
  useEffect(() => {
    console.log("helloComponent2");
    return () => console.log("cleaned");
  }, [bg.backgrounds2]);
  return useMemo(() => {
    // The rest of your rendering logic
    console.log("2");
    return (
      <div style={{ backgroundColor: `${bg.backgrounds2}`, height: "300px" }}>
        testComponent2
      </div>
    );
  }, [bg.backgrounds2]);
};

export default TestComponent2;
