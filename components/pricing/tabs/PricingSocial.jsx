import React from "react";
import { socialCardOne, socialCardTwo, socialCardThree } from "@/utils/tabData";
import Image from "next/image";
import done from "../../../public/icons/done.svg";
import CustomButton from "@/components/common/button/CustomButton";

const PricingSocial = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <div
        className="card_one w-full md:w-[350px] border border-[#EEEEEE] rounded-[24px] p-3 h-[auto]"
        data-aos="zoom-out-right"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {socialCardOne.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {socialCardOne.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {socialCardOne.features.map((item) => {
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
        data-aos="zoom-out-up"
      >
        <p className="text-center my-4 text-[#ffffff] font-semibold text-[24px]">
          Recomended
        </p>
        <div className="card_two w-full md:w-[350px] border bg-[#ffffff] border-[#EEEEEE] rounded-[24px] p-3 h-[auto]">
          <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
            {socialCardTwo.price}
          </p>
          <p className="text-[#1E2537] font-medium text-[16px]">
            {socialCardTwo.description}
          </p>
          <div className="line border mt-5"></div>
          <div className="mt-4">
            {socialCardTwo.features.map((item) => {
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
        data-aos="zoom-out-down"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {socialCardThree.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {socialCardThree.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {socialCardThree.features.map((item) => {
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

export default PricingSocial;
