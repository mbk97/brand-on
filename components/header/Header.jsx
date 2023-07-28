"use client";
import React, { useState } from "react";
import WebNavbar from "../navigation/OverLayNavbar";
import "./style.css";
import Image from "next/image";
import OverLayNavbar from "../navigation/OverLayNavbar";
import Navbar from "../navigation/Navbar";
import originalBg from "../../public/be-original-img.png";
import Reveal from "../animation/Reveal";

const Header = () => {
  const [click, setClick] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const menuWrapperClass = click ? "active-web-menu" : "";

  return (
    <div
      className="h-screen relative overflow-hidden header"
      style={{}}
      id="home"
    >
      <div
        className={`bg-[#000000]  h-screen web-menu-wrapper hidden lg:block z-10 ${menuWrapperClass}`}
      >
        <OverLayNavbar handleClick={handleClick} />
      </div>
      <div className="z-10">
        <Navbar
          showMobileNav={showMobileNav}
          handleShowMobileNav={handleShowMobileNav}
        />
        {/* header content */}
        <div className="px-[40px] lg:px-[90px] flex  justify-between items-center mt-10 lg:mt-24 ">
          <div className="w-full md:w-[36.875rem]">
            <Reveal>
              <h2 className="text-[2.188rem] md:text-[4.375rem] leading-[50px] md:leading-[90px] font-semibold">
                Driven By Data, Dedicated To Solutions
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-sm md:text-2xl md:w-[440px] w-full">
                An audacious agency with marketing, data, research and
                developments experts that transforms brands into assets.
              </p>
            </Reveal>

            <div className="flex gap-3 mt-8">
              <a href="mailto:hello@growwithbrandon@gmail.com">
                <button className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] flex items-center justify-center w-[120px]">
                  MAIL US
                </button>
              </a>
              <a href="tel:+234 810 012 3456">
                <button className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] flex items-center justify-center w-[120px]">
                  CALL US
                </button>
              </a>
            </div>
          </div>
          <div className="img_wrapper">
            <Image
              src={originalBg}
              alt="hello"
              className="md:w-[219px] md:h-[220px] w-[57px] h-[57px] "
            />
          </div>
        </div>
        {/* header content */}
      </div>
    </div>
  );
};

export default Header;
