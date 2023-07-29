import React from "react";
import "./style.css";
import vid from "../../public/brandon.mp4";

const BrandOnLabs = () => {
  return (
    <div
      className="bg-[#181818] h-auto text-[#ffffff]  px-6 md:px-12 py-12"
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
      <div className="flex items-center justify-center">
        <video
          controls
          className="md:w-[500px] w-full h-[350px] mt-7 bg-[#514D42]"
        >
          <source type="video/mp4" src={vid} poster="../../public/robots.png" />
        </video>
      </div>
    </div>
  );
};

export default BrandOnLabs;
