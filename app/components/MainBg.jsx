import React from "react";

const MainBg = () => {
  return (
    <div className=" brightness-110 fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 rounded-full bg-[#3b82f6]/10 blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-[#8b5cf6]/10 blur-[120px] mix-blend-screen"></div>
    </div>
  );
};

export default MainBg;
