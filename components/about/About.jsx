import React, { useState } from "react";
import "./style.css";
import Mission from "./Mission";
import Vision from "./Vision";
import MobileVision from "./mobileComponent/MobileVision";
import MobileMission from "./mobileComponent/MobileMission";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleNextTab = () => {
    if (tabIndex === 0) {
      setTabIndex(1);
    } else {
      return;
    }
  };

  const handlePrevTab = () => {
    if (tabIndex === 1) {
      setTabIndex(0);
    } else {
      return;
    }
  };

  return (
    <div id="about" className="h-auto flex-col pt-12 pb-20 md:px-14 px-6">
      <div className="mb-[20px] md:mb-[40px] about_bg p-3 pl-10 ">
        <div data-aos="zoom-out-up">
          <h1 className="text-[#ffffff] font-semibold  text-[20px] md:text-[40px]">
            -WHO WE ARE
          </h1>
        </div>
      </div>

      <section className="flex gap-6 justify-center items-center flex-wrap md:flex-nowrap">
        <div className="hidden md:block">
          {tabIndex === 0 ? (
            <Mission
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
              tabIndex={tabIndex}
            />
          ) : (
            <Vision
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
              tabIndex={tabIndex}
            />
          )}
        </div>
        <div className="block md:hidden">
          {tabIndex === 0 ? (
            <MobileMission
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
              tabIndex={tabIndex}
            />
          ) : (
            <MobileVision
              handleNextTab={handleNextTab}
              handlePrevTab={handlePrevTab}
              tabIndex={tabIndex}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
