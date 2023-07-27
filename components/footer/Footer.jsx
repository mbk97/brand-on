import React from "react";
import { myFont } from "@/utils/fonts";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import CustomButton from "../common/button/CustomButton";
import "./style.css";
import { socialMediaLinks } from "./data";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { links } from "@/utils/data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    // change footer height back to 600px
    <div className="text-[white]  h-[auto] md:px-12 md:py-20 px-5 pt-14 ">
      <div className="mb-10">
        <h1 className=" text-[#FF931E] big-text">
          LET&rsquo;S MAKE YOUR <br /> BRAND A{" "}
          <span className="text-[white]">MOVEMENT</span>
        </h1>
      </div>
      <div className="flex justify-between flex-wrap md:gap-7 gap-5">
        <div className="hidden md:block">
          <Link to="home" smooth={true}>
            <Image
              src={logo}
              width={180}
              height={32}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* Contact wrapper */}
        <div>
          <p className="footer-header-text leading-5 text-[#ffffff] font-semibold">
            Contact Us
          </p>

          <div className="mt-4">
            <a href="mailto:hello@growwithbrandon@gmail.com">
              <div className="flex gap-2 items-center mb-3">
                <AiOutlineMail />
                <p className="footer-sub-text">
                  hello@growwithbrandon@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+234 810 012 3456">
              <div className="flex gap-2 items-center">
                <BsTelephoneInbound />
                <p className="footer-sub-text">+234 810 012 3456</p>
              </div>
            </a>
          </div>
        </div>
        {/* Contact wrapper */}

        {/* links wrapper */}
        <div className="w-full md:w-[auto]">
          <p className="footer-header-text leading-5 text-[#ffffff] font-semibold">
            Links
          </p>
          <div className="mt-4">
            {links.map((item) => {
              return (
                <p
                  key={item.id}
                  className="text-[#ffffff] footer-sub-text cursor-pointer"
                >
                  <Link to={item.path} smooth={true}>
                    {item.text}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
        {/* links wrapper */}
        {/* social media wrapper */}
        <div>
          <p className="footer-header-text leading-5 text-[#ffffff] font-semibold">
            Social Media
          </p>
          <div className="mt-4">
            {socialMediaLinks.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>
        {/* social media wrapper */}
      </div>
      <div className="flex justify-center mt-16 mb-8 items-center md:hidden">
        <Image src={logo} width={180} height={32} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
