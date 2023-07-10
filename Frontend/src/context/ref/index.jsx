import React, { createContext } from "react";

export const BackgoundTheme = createContext(null);

const Test = () => {
  return (
    <div>
      <div className="h-[500px] w-[50%] bg-neutral-300 ">
      <p></p>

      </div>
    </div>
  );
};

export default Test;
