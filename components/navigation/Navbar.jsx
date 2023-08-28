import Image from "next/image";
import React from "react";
import Logo from "../../public/icons/logo.svg";
import "./style.css";
import { links } from "@/utils/data";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = ({ showMobileNav, handleShowMobileNav }) => {
  return (
    <div className="px-5 md:px-10 py-2 md:py-4 nav_wrapper">
      <div className="nav_logo_wrapper">
        <div className="logo_wrapper">
          <Image src={Logo} alt="logo" width={180} height={32} />
        </div>
        <div className={showMobileNav ? "nav_ul active" : "nav_ul"}>
          <Image
            src={Logo}
            alt="logo"
            width={180}
            height={32}
            className="lg:hidden cursor-pointer"
          />
          <ul className="flex flex-col lg:flex-row items-center mt-10 md:mt-2 md:gap-10 gap-7 ">
            {links.map(({ id, text, path }) => {
              return (
                <li key={id} className="list-disc cursor-pointer nav_li">
                  <Link to={path} smooth={true} onClick={handleShowMobileNav}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden flex justify-center items-center mt-9">
            <a
              href="https://share-eu1.hsforms.com/1tjrYAyA7Q6O9HIGCVeN9Zw2d84xh"
              target="_blank"
            >
              <button className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] flex items-center justify-center ">
                TALK WITH BRANDON
              </button>
            </a>
          </div>
          <div className="absolute top-5 right-3 cursor-pointer lg:hidden">
            <AiOutlineClose size={30} onClick={handleShowMobileNav} />
          </div>
        </div>
      </div>
      <div className="btn_wrapper">
        <a
          href="https://share-eu1.hsforms.com/1tjrYAyA7Q6O9HIGCVeN9Zw2d84xh"
          target="_blank"
        >
          <button className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] hidden lg:flex items-center justify-center mt-3">
            TALK WITH BRANDON
          </button>
        </a>
        <AiOutlineMenu
          onClick={handleShowMobileNav}
          className="cursor-pointer mt-4 lg:hidden"
          size={30}
        />
      </div>

      {/* <div>nav btn</div> */}
    </div>
  );
};

export default Navbar;
