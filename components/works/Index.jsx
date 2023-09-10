import React, { useState } from "react";
import {
  socialMediaData,
  worksTabData,
  brandIdentityData,
  allContentData,
  websiteData,
} from "@/utils/tabData";
import Image from "next/image";
import { Link } from "react-scroll";

export const All = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedData = showMore ? allContentData : allContentData.slice(0, 4);

  return (
    <div>
      <div className="flex flex-wrap px-2 justify-center gap-6">
        {displayedData.map((item) => {
          return (
            <div key={item.id} className="h-[650px] md:h-[700px]">
              <Image
                src={item.image}
                loading="lazy"
                alt="hello"
                style={{
                  objectPosition: "center",
                }}
                className="md:w-[500px] md:h-[400px] w:full h-[300px] all-works-image"
              />
              <div className="mt-5 pl-6">
                <p className="text-[#ff931e]  font-semibold text-2xl">
                  {item.title}
                </p>
                <p className="md:w-[350px] h-[90px]">{item.description}</p>
                <p className="text-[#747474] mb-3">{item.tagOne}</p>
                <ul className="flex items-center gap-4">
                  <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                    {item.tagTwo}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        {showMore ? (
          <Link
            to={"portfolio"}
            smooth={true}
            className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] flex items-center justify-center w-[120px] text-[#ff931e] cursor-pointer"
            onClick={handleShowMore}
          >
            Show Less
          </Link>
        ) : (
          <button
            className="bg-transparent border border-solid p-4 text-[12px] font-semibold h-[39px] flex items-center justify-center w-[120px] text-[#ff931e]"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export const Brand = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {brandIdentityData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              loading="lazy"
              alt="hello"
              style={{
                objectPosition: "center",
                // height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Social = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {socialMediaData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              loading="lazy"
              alt="hello"
              style={{
                objectPosition: "center",
                // height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[350px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Website = () => {
  return (
    <div className="flex flex-wrap px-2 justify-center gap-6">
      {websiteData.map((item) => {
        return (
          <div key={item.id} className="h-[650px] md:h-[700px]">
            <Image
              src={item.image}
              loading="lazy"
              alt="hello"
              style={{
                objectPosition: "center",
                // height: "408px",
              }}
              className="md:w-[500px] md:h-[400px] w:full h-[300px] "
            />
            <div className="mt-5 pl-6">
              <p className="text-[#ff931e]  font-semibold text-2xl">
                {item.title}
              </p>
              <p className="md:w-[420px] h-[90px]">{item.description}</p>
              <p className="text-[#747474] mb-3">{item.tagOne}</p>
              <ul>
                <li className=" list-disc marker:text-[#ff931e] text-[14px] md:ml-[10px]">
                  {item.tagTwo}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
