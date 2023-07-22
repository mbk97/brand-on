import React from "react";
import "./style.css";
import { blogData } from "@/utils/data";
import Image from "next/image";

const Blog = () => {
  const bigCardData = blogData.slice(0, 1);
  const smallCardData = blogData.slice(1, 4);
  const cardData = bigCardData[0];
  return (
    <div
      className="bg-[#ffffff] text-[#000000] h-[auto] px-6 md:px-12 py-12"
      id="blog"
    >
      <p className="font-semibold">- Blogs</p>
      <div className="flex justify-between flex-wrap gap-5">
        <h1 className="font-semibold md:text-[32px] text-[20px] md:w-[647px] w-full">
          Browse our articles on marketing and growth
        </h1>
        <p className="md:w-[440px] w-[100%]">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
        </p>
      </div>
      <div className="flex g-10 flex-wrap justify-between pt-10">
        {/* big blog card */}
        <div>
          <div className="md:w-[750px] w-[100%]">
            <Image
              src={cardData.image}
              alt={cardData.title}
              className="h-[300px] md:h-[330px]  object-center"
            />
            <div className="flex justify-between mt-2">
              <p className="text-[#8C8C8C] text-[14px]">{cardData.date}</p>
              <p className="text-[#8C8C8C] text-[14px]">{cardData.tag}</p>
            </div>
            <p className="font-semibold text-[24px]">{cardData.title}</p>
            <p className="text-[#6B6B6B]">{cardData.description}</p>
          </div>
        </div>
        {/* big blog card */}

        {/* small blog card */}
        <div className="md:mt-5 lg:mt-0 mt-7">
          {smallCardData.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[100%] lg:w-[500px] md:flex mb-7 md:gap-3 md:mb-5"
              >
                <div>
                  <Image
                    alt={item.title}
                    src={item.image}
                    className="w-[100%] md:w-[285px]"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold w-[100%]">
                    {item.title}
                  </p>
                  <p className="text-[#6B6B6B] w-[100%] text-[16px]">
                    {item.description}
                  </p>
                  <p className="text-[#6B6B6B] text-[16px]">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* small blog card */}
      </div>
    </div>
  );
};

export default Blog;
