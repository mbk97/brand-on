"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import smallLogoText from "../../public/icons/smallLogoText.svg";
import BigBrandText from "../../public/icons/bigBrandText.svg";
import { BiToggleLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { menuItems } from "./data";
import "./style.css";
import { socialMediaLinks } from "../footer/data";
import { Link } from "react-scroll";

const OverLayNavbar = ({ handleClick }) => {
  const workColorText = (text) => {
    if (text === "WORKS") {
      return "#FF931E";
    }
  };

  return (
    <div className="pt-8 text-[white]">
      <header className="flex items-center justify-between px-12">
        <div className="w-[300px] flex items-center justify-between">
          <Image src={smallLogoText} width={40} height={40} alt="logo" />
          <Image src={logo} width={180} height={32} alt="logo" />
        </div>
        <div className="w-[120px] flex items-center justify-between">
          <p className="">Hello</p>
          <BiToggleLeft className="text-[#ffffff]" size={40} />
        </div>
      </header>
      <main className="px-12 h-[450px] w-[90vw] flex justify-between items-center mt-10">
        <div className="flex gap-[13rem]">
          <AiOutlineClose
            size={30}
            className="mt-[8rem] cursor-pointer"
            onClick={handleClick}
          />
          <div>
            {menuItems.map((item) => {
              return (
                <p
                  key={item.id}
                  className={`my-3 link-text  text-4xl font-medium text-[${workColorText(
                    item.text,
                  )}]`}
                >
                  <Link to={item.path} smooth={true} onClick={handleClick}>
                    {item.text}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <p className="footer-header-text leading-5 text-[#ffffff] font-semibold">
            Social Media
          </p>
          <div className="mt-4">
            {socialMediaLinks.map((item) => {
              return (
                <p key={item.id} className="text-[#ffffff] footer-sub-text ">
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>
      </main>
      <div className="absolute left-[170px] bottom-8 flex w-[160px] gap-5 justify-between text-[#666666]">
        <p className="trademark-text">BrandOn, INC</p>
        <p className="trademark-text">2023</p>
      </div>
      <div className="absolute right-[25px] bottom-2">
        <Image src={BigBrandText} width={400} height={140} alt="logo" />
      </div>
    </div>
  );
};

export default OverLayNavbar;
