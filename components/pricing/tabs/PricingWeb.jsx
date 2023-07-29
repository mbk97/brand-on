import {
  websiteCardOne,
  websiteCardTwo,
  websiteCardThree,
} from "@/utils/tabData";
import React from "react";
import Image from "next/image";
import done from "../../../public/icons/done.svg";
import CustomButton from "@/components/common/button/CustomButton";

const PricingWeb = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <div
        className="card_one w-full md:w-[350px] border border-[#EEEEEE] rounded-[24px] p-3 h-[auto]"
        data-aos="zoom-in-right"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {websiteCardOne.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {websiteCardOne.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {websiteCardOne.features.map((item) => {
            return (
              <div key={item.id} className="flex items-center my-2">
                <Image src={done} alt="done" className="mr-2" />
                <p className="font-medium text-[#1E2537]">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <CustomButton text={"Learn more"} primary={false} />
        </div>
      </div>
      <div
        className="bg-[#FF931E] p-[1px]"
        style={{
          borderTopLeftRadius: "17px",
          borderTopRightRadius: "17px",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
        data-aos="zoom-in-up"
      >
        <p className="text-center my-4 text-[#ffffff] font-semibold text-[24px]">
          Recomended
        </p>
        <div className="card_two w-full md:w-[350px] border bg-[#ffffff] border-[#EEEEEE] rounded-[24px] p-3 h-[auto]">
          <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
            {websiteCardTwo.price}
          </p>
          <p className="text-[#1E2537] font-medium text-[16px]">
            {websiteCardTwo.description}
          </p>
          <div className="line border mt-5"></div>
          <div className="mt-4">
            {websiteCardTwo.features.map((item) => {
              return (
                <div key={item.id} className="flex items-center my-2">
                  <Image src={done} alt="done" className="mr-2" />
                  <p className="font-medium text-[#1E2537]">{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <CustomButton text={"Learn more"} primary={true} />
          </div>
        </div>
      </div>
      <div
        className="card_three w-full md:w-[350px] border border-[#EEEEEE] rounded-[24px] p-3 h-[auto]"
        data-aos="zoom-in-left"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {websiteCardThree.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {websiteCardThree.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {websiteCardThree.features.map((item) => {
            return (
              <div key={item.id} className="flex items-center my-2">
                <Image src={done} alt="done" className="mr-2" />
                <p className="font-medium text-[#1E2537]">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <CustomButton text={"Learn more"} primary={false} />
        </div>
      </div>
    </div>
  );
};

export default PricingWeb;
