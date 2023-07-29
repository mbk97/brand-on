import {
  brandIdentityCardOne,
  brandIdentityCardThree,
  brandIdentityCardTwo,
} from "@/utils/tabData";
import React from "react";
import Image from "next/image";
import done from "../../../public/icons/done.svg";
import CustomButton from "@/components/common/button/CustomButton";

const PricingBrand = () => {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-center">
      <div
        className="card_one w-[350px] border border-[#EEEEEE] rounded-[24px] p-3 h-[auto]"
        data-aos="flip-left"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {brandIdentityCardOne.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {brandIdentityCardOne.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {brandIdentityCardOne.features.map((item) => {
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
        data-aos="flip-up"
      >
        <p className="text-center my-4 text-[#ffffff] font-semibold text-[24px]">
          Recomended
        </p>
        <div className="card_two w-[350px] border bg-[#ffffff] border-[#EEEEEE] rounded-[24px] p-3 h-[auto]">
          <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
            {brandIdentityCardTwo.price}
          </p>
          <p className="text-[#1E2537] font-medium text-[16px]">
            {brandIdentityCardTwo.description}
          </p>
          <div className="line border mt-5"></div>
          <div className="mt-4">
            {brandIdentityCardTwo.features.map((item) => {
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
        className="card_three w-[350px] border border-[#EEEEEE] rounded-[24px] p-3 h-[auto]"
        data-aos="flip-up"
      >
        <p className="text-center  text-[#FF931E] font-semibold text-[60px]">
          {brandIdentityCardThree.price}
        </p>
        <p className="text-[#1E2537] font-medium text-[16px]">
          {brandIdentityCardThree.description}
        </p>
        <div className="line border mt-5"></div>
        <div className="mt-4">
          {brandIdentityCardThree.features.map((item) => {
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

export default PricingBrand;
