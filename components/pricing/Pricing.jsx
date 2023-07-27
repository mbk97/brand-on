import { pricingTabData } from "@/utils/tabData";
import React, { useState } from "react";
import "./style.css";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeItem = pricingTabData?.find(({ id }) => id === activeTab);
  console.log(activeItem);
  return (
    <div
      className="h-[auto] py-20 bg-[#ffffff] text-[#000000] px-12"
      id="pricing"
    >
      <div className="pricing_title_wrapper flex justify-between flex-wrap gap-5">
        <h1
          className="text-[#000000] font-semibold  text-[40px] md:text-[40px]"
          data-aos="flip-right"
        >
          PRICING
        </h1>
        <p className="font-medium text-[#000000] md:text-right text-center w-[100%] md:w-[500px]">
          Lets’s make the wise decision for your Business with our Affordable
          Pricing Plans for Maximum Impact
        </p>
      </div>
      <div className="mt-10">
        {/* tab btns */}
        <div
          className={`flex gap-3 items-center justify-center flex-wrap  ${"works_tab_btn_wrapper"}`}
        >
          {pricingTabData?.map(({ id, title }) => {
            return (
              <div key={id}>
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

        <div className="flex justify-center mt-10">
          <div
            className={
              activeItem?.id === activeTab
                ? "active_tab_component"
                : "tab_component"
            }
          >
            <activeItem.Component />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
