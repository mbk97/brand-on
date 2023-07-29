import React, { useState } from "react";
import { worksTabData } from "@/utils/tabData";
import "./style.css";
import Reveal from "../animation/Reveal";

const Works = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeItem = worksTabData?.find(({ id }) => id === activeTab);

  return (
    <div className="works_wrapper mx-5 lg:mx-20 mb-20" id="portfolio">
      <div className="mt-7 flex justify-center gap-5 flex-wrap lg:justify-between">
        {/* <Reveal> */}
        <div className="flex gap-2" data-aos="flip-left">
          <span className="our_text md:text-6xl text-[42px] font-semibold">
            OUR
          </span>{" "}
          <h1 className="work_text md:text-6xl text-[42px] font-semibold">
            WORKS
          </h1>
        </div>
        {/* </Reveal> */}
        {/* tab btns */}
        <div
          className={`md:flex block text-center md:gap-3 items-center justify-center flex-wrap  ${"works_tab_btn_wrapper"}`}
        >
          {worksTabData?.map(({ id, title }) => {
            return (
              <div key={id} className="">
                <p
                  className={activeTab === id ? "tab_btn active" : "tab_btn"}
                  onClick={() => setActiveTab(id)}
                >
                  {title}
                </p>
              </div>
            );
          })}
        </div>
        {/* tab btns */}
      </div>

      <div className="flex justify-center mt-10">
        <div
          className={`
            ${
              activeItem?.id === activeTab
                ? "active_tab_component"
                : "tab_component"
            }
          `}
        >
          <activeItem.Component />
        </div>
      </div>
    </div>
  );
};

export default Works;
