import React from "react";

const FlashScreen = () => {
  return (
    <div className="absolute left-0 top-0 z-20 h-screen w-screen overflow-y-hidden bg-gray-700 opacity-60">
      <div>
        <img src="/FlashScreen.jpg" className="z-10" />
      </div>
    </div>
  );
};

export default FlashScreen;
