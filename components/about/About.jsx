import React from "react";
import "./style.css";
import aboutImgOne from "../../public/about-img-1.png";
import aboutImgTwo from "../../public/about-img-2.png";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="h-auto flex-col pt-12 pb-20 md:px-14 px-6">
      <div className="mb-[20px] md:mb-[40px] about_bg p-3 pl-10 ">
        <div data-aos="zoom-out-up">
          <h1 className="text-[#ffffff] font-semibold  text-[20px] md:text-[40px]">
            -WHO WE ARE
          </h1>
        </div>
      </div>

      <section className="flex gap-6 justify-center items-center flex-wrap">
        {/* card one */}
        <div className="flex flex-col-reverse md:flex-col">
          <div className=" w-full md:w-[300px]">
            <h1 className="title_text font-semibold text-xl underline md:text-5xl ">
              OUR VISION
            </h1>
          </div>
          <p className="w-full md:w-[450px] text-[#ff931e] text-[16px] font-medium mt-5 md-[24px]">
            To create Prosperity for Brands through Branding & Marketing and
            move businesses to a unicorn status within a decade.
          </p>
          <div className="w-full md:w-[430px] mt-7" data-aos="flip-left">
            <Image src={aboutImgOne} />
          </div>
        </div>
        {/* card one */}

        {/* card two */}
        <div>
          <div className="w-full md:w-[430px] mt-4" data-aos="flip-right">
            <Image src={aboutImgTwo} />
          </div>
          <div className="w-[370px] mt-7">
            <h1 className="title_text font-semibold text-xl underline md:text-5xl ">
              OUR MISSION
            </h1>
          </div>
          <p className="w-full md:w-[450px] text-[#ff931e] text-[16px] font-medium mt-5 md-[24px] ">
            <p className="font-bold span_class inline">BrandOn</p> is on the
            adventure of breaking templates and “by the books” type of branding
            by using research to create custom and data-based branding solutions
            specific to individual brands.
          </p>
        </div>
        {/* card two */}
      </section>
    </div>
  );
};

export default About;