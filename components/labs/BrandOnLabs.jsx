import React from "react";
import "./style.css";
import ReactPlayer from "react-player";
// import vid from "../../public/brand.mp4";

// Render a YouTube video player

const BrandOnLabs = () => {
  return (
    <div
      className="bg-[#181818] h-auto text-[#ffffff]  px-6 md:px-12 py-12"
      id="labs"
    >
      <div className="flex justify-between flex-wrap gap-3 md:gap-6">
        <div className="mb-[10px] md:mb-[40px] brand-on_bg p-3 ">
          <h1 className="text-[#ffffff]  font-semibold  text-[20px] md:text-[40px]">
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
          width="750"
          height="500"
          controls
          poster="../../public/robots.png"
        >
          <source
            type="video/mp4"
            src="https://www.youtube.com/watch?v=Vs3XsJznRyA"
          />
        </video>

        {/* <ReactPlayer src="" /> */}
      </div>
    </div>
  );
};

export default BrandOnLabs;
