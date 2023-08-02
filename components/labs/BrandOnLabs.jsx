import React, { useState } from "react";
import "./style.css";
import vid from "../../public/brandon.mp4";

const BrandOnLabs = () => {
  return (
    <div
      className="bg-[#181818] h-auto md:h-[800px] text-[#ffffff]  px-6 md:px-12 py-12"
      id="labs"
    >
      <div className="flex justify-between flex-wrap gap-3 md:gap-6">
        <div className="mb-[10px] md:mb-[40px] brand-on_bg p-3 ">
          <h1 className="text-[#ffffff]  font-semibold   text-[20px] md:text-[40px]">
            -BRANDON LABS
          </h1>
        </div>
        <p className="w-auto md:w-[400px] text-right">
          We are Heisenberg of Branding and Marketing, have a peep of how we
          cook
        </p>
      </div>
      <div className="flex items-center justify-center player-wrapper mt-10 ">
        <video
          autoPlay
          muted
          controls
          className="h-[400px] md:w-[800px] w-[100%]"
          // poster={}
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BrandOnLabs;
