import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { testimonialData } from "@/utils/data";
import Image from "next/image";
import quoteImg from "../../public/icons/quotes.svg";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    rtl: false,
    arrows: false,
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
  // remove the height on this component
  return (
    <div className="h-auto bg-[#ffffff] px-12 pt-20" id="testimonials">
      <div className="border border-t border-[#353535] mb-10"></div>
      <div className="text_bg ">
        <h1
          className="text-[#000000] font-semibold  text-[20px] md:text-[40px]"
          data-aos="flip-left"
        >
          -WHAT OUR CUSTOMER SAID
        </h1>
      </div>
      <div className="mt-14">
        <Slider {...settings}>
          {testimonialData.map((item) => {
            return (
              <div
                key={item.id}
                className="h-[500]px md:h-[300px] border w-[100px] border-[#514D42] flex items-center md:p-12 p-2 mr-5"
              >
                <div>
                  <Image src={quoteImg} alt="quotes" />
                  <p className="text-[#000000] my-5">{item.text}</p>
                  <div className="flex gap-3">
                    <Image
                      src={item.image}
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div>
                      <p className="text-[#000000] font-semibold">
                        {item.name}
                      </p>
                      <p className=" text-[#000000]">{item.role}</p>
                    </div>
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

export default Testimonials;
