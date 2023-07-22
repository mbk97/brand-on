import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { offerData } from "@/utils/data";
import Slider from "react-slick";

const Offer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
  return (
    <div className="offer_wrapper mx-5 mt-9 lg:mx-20 mb-20">
      <div className="">
        <p className="font-semibold text-[15px]  text-center my-8">
          WHAT WE OFFER
        </p>
        <Slider {...settings}>
          {offerData.map((item) => {
            return (
              <div key={item.id}>
                <h1 className="text-[#ff931e] font-bold text-[20px] text-center">
                  {item.text}
                </h1>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
