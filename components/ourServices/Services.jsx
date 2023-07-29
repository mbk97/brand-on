import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { servicesData } from "@/utils/data";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";
import { NextArrow, PrevArrow } from "../common/carousel/arrow";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#ffffff] h-auto px-12 pt-10 pb-20 " id="services">
      <div className="flex justify-between flex-wrap gap-6">
        <div className="mb-[20px] md:mb-[40px] service_bg p-3 ">
          <div data-aos="zoom-out-up">
            <h1 className="text-[#000000] font-semibold  text-[20px] md:text-[40px]">
              -OUR SERVICES
            </h1>
          </div>
        </div>
        <p className="text-[#000000] w-[400px] text-center mb-10 md:text-right">
          We strive to make your business goals a reality with with high
          branding and marketing solutions to make your brand a movement.
        </p>
      </div>
      <div className="">
        <Slider {...settings}>
          {servicesData.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[18.75rem] h-[28.125rem] bg-[#272727] service_card"
              >
                <Image src={item.image} alt={item.title} className="card_img" />
                <div className="text-center p-2 md:p-4">
                  <p className="title_text mb-2 text-[14px] md:text-[14px] text-[#ff931e] md:font-semibold ">
                    {item.title}
                  </p>
                  <p className="desc_text md:font-medium text-[12px] md:text-[14px] ">
                    {item.description}
                  </p>
                  <div className="mt-5 border-[#6B6B6B] border-t-[1px]">
                    <p className="pt-2 font-medium flex items-center justify-center gap-3">
                      Learn more <BsArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
